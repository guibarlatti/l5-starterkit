<?php

namespace Lfalmeida\Lbase\Middleware;

use Closure;
use Illuminate\Support\Facades\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Middleware\BaseMiddleware;

class TokenEntrustAbility extends BaseMiddleware
{
    public function handle($request, Closure $next, $roles, $permissions, $validateAll = false)
    {

        $token = JWTAuth::getToken();

        if (!$token) {
            return Response::apiResponse([], 400, 'Token não encontrado ou inválido.');
        }

        try {
            $user = $this->auth->authenticate($token);
        } catch (TokenExpiredException $e) {
            return Response::apiResponse([], 400, 'O token de acesso expirou.');
        } catch (JWTException $e) {
            return Response::apiResponse([], 400, 'Token inválido.');
        }

        if (!$user) {
            return Response::apiResponse([], 404, 'Usuário não encontrado.');
        }

        if (!$request->user()->ability(explode('|', $roles), explode('|', $permissions),
            array('validate_all' => $validateAll))
        ) {
            return $this->respond('tymon.jwt.invalid', 'token_invalid', 401, 'Unauthorized');
        }

        $this->events->fire('tymon.jwt.valid', $user);

        return $next($request);
    }
}