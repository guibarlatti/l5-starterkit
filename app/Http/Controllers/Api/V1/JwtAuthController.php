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
                return Response::apiResponse([
                    'message' => 'Credenciais Inválidas.',
                    'httpCode' => 401
                ]);
            }
        } catch (JWTException $e) {
            return Response::apiResponse([
                'message' => 'Credenciais Inválidas.',
                'httpCode' => 500
            ]);
        }

        return Response::apiResponse([
            'data' => [
                'token' => $token
            ],
        ]);
    }

}
