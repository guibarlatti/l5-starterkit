<?php
namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * Class JwtAuthController
 *
 * @package App\Http\Controllers\Api\V1
 */
class JwtAuthController extends Controller
{
    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * @return mixed
     */
    public function login()
    {
        $credentials = Input::only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return Response::apiResponse([], 401, 'Credenciais Inválidas.');
            }
        } catch (JWTException $e) {
            return Response::apiResponse([], 500, 'Não foi possível realizar a autenticação.');
        }

        return Response::apiResponse([
            'token' => $token,
        ]);
    }

}
