<?php

namespace App\Models;

use Lfalmeida\Lbase\Models\BaseModel;

class User extends BaseModel
{
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
