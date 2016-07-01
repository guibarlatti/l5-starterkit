<?php

namespace App\Repositories;

use Lfalmeida\Lbase\Repositories\Repository as BaseRepository;

/**
 * Class EmployeesRepository
 * @package Modules\GuardaMirim\Repositories
 */
class PermissionsRepository extends BaseRepository
{
    /**
     * Define quais relações devem ser carregados ao instanciar um model
     * @var array
     */
    protected $relationships = [];

    /**
     * Define qual coluna deve ser usada na ordenação de resultados
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
        return 'Lfalmeida\Lbase\Models\Permission';
    }
}