<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Lfalmeida\Lbase\Models\BaseModel;
use Zizaco\Entrust\Traits\EntrustUserTrait;


class User extends BaseModel implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, CanResetPassword, EntrustUserTrait;
    /**
     * Regras de validação deste model
     *
     * @see https://github.com/jarektkaczyk/eloquence/wiki/Validable
     * @var array
     */
    protected static $businessRules = [
        'name' => ['required', 'min:5'],
        'email' => ['required', 'email', 'unique:users'],
        'password' => ['required', 'min:6']
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

}
