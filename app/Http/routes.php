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
     * Access rate: 3 hits por minuto
     */
//    Route::group(['middleware' => 'throttle:3,1'], function () {
    Route::post('login', ['uses' => 'Api\V1\JwtAuthController@login']);
//    });

    Route::resource('roles', 'Api\V1\RolesController'); //, ['only' => ['index', 'store', 'destroy']]
    Route::resource('permissions', 'Api\V1\PermissionsController');//, ['only' => ['index', 'store', 'destroy']]);


    /**
     * Acessadas somente com Token
     */
//    Route::group(['middleware' => ['role:admin']], function () {
    Route::resource('users', 'Api\V1\UsersController');
    Route::resource('users.roles', 'Api\V1\UserRolesController');
    Route::resource('users.permissions', 'Api\V1\UserPermissionsController');
//    });

});

//Route::post('role', 'JwtAuthenticateController@createRole');
//Route::post('permission', 'JwtAuthenticateController@createPermission');
//Route::post('assign-role', 'JwtAuthenticateController@assignRole');
//Route::post('attach-permission', 'JwtAuthenticateController@attachPermission');
//Route::post('check', 'JwtAuthenticateController@checkRoles');
//Route::group(['prefix' => 'api', 'middleware' => ['ability:admin,create-users']], function () {
//    Route::get('users', 'JwtAuthenticateController@index');
//});