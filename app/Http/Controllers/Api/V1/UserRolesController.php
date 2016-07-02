<?php
namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\UsersRepository as Repository;
use Illuminate\Container\Container as App;
use Illuminate\Support\Facades\Input;
use Response;

class UserRolesController extends Controller
{

    public function __construct(App $app)
    {
        $this->repository = new Repository($app);
    }

    /**
     * @param $userId
     *
     * @return mixed
     */
    public function index($userId)
    {
        $user = User::with('roles')->find($userId);

        if (!$user) {
            return Response::apiResponse($data = null, 404, 'Usuário não encontrado.');
        }

        $roles = isset($user->roles) ? $user->roles : [];

        return Response::apiResponse($roles);
    }

    /**
     * @param $userId
     *
     * @return mixed
     * 
     * 
     */
    public function store($userId)
    {
        $roles = Input::get('roles');
        $updatedUser = $this->repository->attachRoles($userId, $roles);
        return Response::apiResponse($updatedUser);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param $userId
     * @param $roles
     *
     * @return \Illuminate\Http\Response
     *
     */
    public function destroy($userId, $roles)
    {
        try {
            return Response::apiResponse($this->repository->detachRoles($userId, $roles));
        } catch (\Exception $e) {
            return Response::apiResponse($data = null, 400, $e->getMessage());
        }
    }
}
