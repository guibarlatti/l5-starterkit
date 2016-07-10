<?php
namespace App\Http\Controllers\Api\V1;

use App\Repositories\RolesRepository as Repository;
use Lfalmeida\Lbase\Controllers\ApiBaseController;

class RolesController extends ApiBaseController
{
    /**
     * UsersController constructor.
     *
     * @param Repository $repository
     */
    public function __construct(Repository $repository)
    {
        parent::__construct($repository);
    }
 
}
