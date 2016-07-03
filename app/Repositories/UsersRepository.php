<?php

namespace App\Repositories;

use Illuminate\Support\Facades\App;
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
     * Atribui Roles para um usuário
     *
     * @param $userId int Identificador do usuário que receberá o cargo
     * @param $roles mixed Pode ser um id de cargo ou um array de id's de cargo
     *
     * @return mixed
     */
    public function attach($userId, $roles)
    {
        try {
            $user = $this->detach($userId, $roles);
            $user->roles()->attach($this->processRolesParam($roles));
        } catch (Exception $e) {
            throw $e;
        }
        return $this->model->with('roles')->find($userId);
    }

    /**
     * Remove um ou mais cargos de um usuário.
     *
     * @param $userId int Identificador do usuário que receberá o cargo
     * @param $roles mixed Pode ser um id de cargo ou um array de id's de cargo
     *
     * @return \App\Models\User
     * @throws \Exception
     */
    public function detach($userId, $roles)
    {
        $user = $this->model->with('roles')->find($userId);

        if (!$user) {
            throw new Exception('Usuário não encontrado.');
        }

        try {
            $roles = !is_array($roles) ? explode(',', $roles) : $roles;
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

                if (!$roleId) {
                    continue;
                }

                $role = $this->getRoleById($roleId);

                $rolesToAttach[] = $role->id;
            }
        } elseif (is_numeric($roles)) {
            $role = $this->getRoleById($roles);
            $rolesToAttach[] = $role->id;
        }

        return $rolesToAttach;
    }

    /**
     * Recebe um id de cargo e retorna um objeto cargo.
     * No caso do cargo não ser encontrado lança uma exceção
     *
     * @param $roleId
     *
     * @return mixed
     * @throws \Exception
     */
    private function getRoleById($roleId)
    {
        if (!is_numeric($roleId)) {
            throw new \Exception(sprintf('Informe o id numérico do cargo.', $roleId));
        }

        $role = Role::find($roleId);

        if (!$role) {
            throw new \Exception(sprintf('Cargo id %s não encontrado.', $role));
        }

        return $role;
    }


}