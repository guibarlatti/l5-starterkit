<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Support\Facades\Auth;
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
            $token = JWTAuth::attempt($credentials);
            if (!$token) {
                return Response::apiResponse([
                    'message' => 'Credenciais Inválidas. ',
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
     * @return mixed
     */
    public function setToken()
    {
        $token = Input::get('token');

        if (!$token) {
            return Response::apiResponse([
                'httpCode' => 401,
                'message' => 'Token não encontrado ou inválido.'
            ]);
        }

        $user = JWTAuth::setToken($token)->authenticate();

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
        Auth::logout();
        return redirect('/');
    }

}
