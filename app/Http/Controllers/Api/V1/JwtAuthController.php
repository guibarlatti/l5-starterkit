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
        // grab credentials from the request
        $credentials = Input::only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {

                return Response::apiResponse([
                    'error' => 'invalidCredentials',
                ], 401);

            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return Response::apiResponse([
                'error' => 'invalidCredentials',
            ], 500);
        }

        // all good so return the token
        return Response::apiResponse([
            'token' => $token,
        ], 401);

    }

}
