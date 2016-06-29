<?php

namespace Lfalmeida\Lbase\Middleware;

use Closure;

use Lfalmeida\Lbase\Utils\TokenHandler;

/**
 * Class CheckToken
 * @package Lfalmeida\Lbase\Middleware
 */
class CheckToken
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function handle($request, Closure $next)
    {
        $isTokenValid = TokenHandler::check($request);

        if (!$isTokenValid) {
            if ($request->ajax()) {
                return response('Unauthorized.', 401);
            } else {
                return response('Unauthorized.', 401);
            }
        }
        return $next($request);
    }


}
