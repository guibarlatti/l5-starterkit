<?php

/**
 * Home
 */
Route::get('/', function () {
    return view('welcome');
});

/**
 * Área restrita (exemplo)
 */
Route::get('/home', 'HomeController@index');

/**
 * Autenticação
 */
Route::auth();

/**
 * API V1
 */
Route::group(['prefix' => 'api/v1'], function () {

    /**
     * Acesso permitido sem Token
     */
    Route::group(['middleware' => 'throttle:3,1'], function () {
        Route::post('login', ['uses' => 'Api\V1\JwtAuthController@login']);
    });

    /**
     * Acessadas somente com Token
     */
    Route::group(['middleware' => ['role:admin']], function () {
        Route::resource('users', 'Api\V1\UsersController');
    });

});


//
//Route::get('/', function () {
//    return view('welcome');
//});
//Route::post('role', 'JwtAuthenticateController@createRole');
//Route::post('permission', 'JwtAuthenticateController@createPermission');
//Route::post('assign-role', 'JwtAuthenticateController@assignRole');
//Route::post('attach-permission', 'JwtAuthenticateController@attachPermission');
//Route::post('check', 'JwtAuthenticateController@checkRoles');
//Route::group(['prefix' => 'api', 'middleware' => ['ability:admin,create-users']], function () {
//    Route::get('users', 'JwtAuthenticateController@index');
//});
Route::post('authenticate', 'JwtAuthenticateController@authenticate');