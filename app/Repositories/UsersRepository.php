<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Response;
use Lfalmeida\Lbase\Models\Role;
use Lfalmeida\Lbase\Repositories\Repository as BaseRepository;
use Mockery\CountValidator\Exception;

/**
 * Class EmployeesRepository
 *
 * @package Modules\GuardaMirim\Repositories
 */
class UsersRepository extends BaseRepository
{
    /**
     * Define quais relações devem ser carregados ao instanciar um model
     *
     * @var array
     */
    protected $relationships = ['roles'];

    /**
     * Define qual coluna deve ser usada na ordenação de resultados
     *
     * @var string
     */
    protected $defaultOrderColumn = 'name';

    /**
     * Retorna qual é o model que este repositório gerencia
     *
     * @return mixed
     */
    public function model()
    {
        return 'App\Models\User';
    }
    
    /**
     * @param $userId
     * @param $roles
     *
     * @return mixed
     */
    public function attachRoles($userId, $roles)
    {
        try {
            $user = $this->detachRoles($userId, $roles);
            $user->roles()->attach($this->processRolesParam($roles));
        } catch (Exception $e) {
            throw $e;
        }
        return $this->model->with('roles')->find($userId);
    }

    /**
     * @param $userId
     * @param $roles
     *
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null|static|static[]
     * @throws \Exception
     */
    public function detachRoles($userId, $roles)
    {
        $user = $this->model->with('roles')->find($userId);

        if (!$user) {
            return Response::apiResponse($data = null, 404, 'Usuário não encontrado.');
        }

        try {
            $rolesToAttach = $this->processRolesParam($roles);
        } catch (Exception $e) {
            throw $e;
        }

        $user->roles()->detach($rolesToAttach);

        return $this->model->with('roles')->find($userId);
    }

    /**
     * @param $roles
     *
     * @return array
     * @throws \Exception
     */
    private function processRolesParam($roles)
    {
        $rolesToAttach = [];

        if (is_array($roles)) {
            $roleIds = $roles;
            foreach ($roleIds as $roleId) {

                if (!is_numeric($roleId)) {
                    throw new \Exception(sprintf('Informe o id numérico do cargo.', $roleId));
                }

                $role = Role::find($roleId);

                if (!$role) {
                    throw new \Exception(sprintf('Cargo id %s não encontrado.', $role));
                }
                $rolesToAttach[] = $role->id;
            }
        } elseif (is_numeric($roles)) {
            $role = Role::find($roles);
            if (!$role) {
                throw new \Exception(sprintf('Cargo id %s não encontrado.', $roles));
            }
            $rolesToAttach[] = $role->id;
        }

        return $rolesToAttach;
    }


}