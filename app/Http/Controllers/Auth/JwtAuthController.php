<?php
namespace App\Http\Controllers\Auth;

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
 * @package App\Http\Controllers
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

    /**
     * @param $token
     *
     * @return mixed
     */
    public function setToken($token)
    {
        JWTAuth::setToken($token);

        $user = JWTAuth::parseToken()->authenticate();

        if ($user) {
            Auth::login($user);
            return Response::apiResponse([
                'message' => 'User logged in.'
            ]);
        }

        return Response::apiResponse([
            'httpCode' => 401
        ]);

    }


    public function showLogin()
    {
        return view('backend.login');
    }


    public function logout()
    {
        return view('backend.home');
    }

}
