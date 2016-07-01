<?php
namespace Lfalmeida\Lbase\Models;

use Lfalmeida\Lbase\Traits\CamelCaseModelTrait;
use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{
    use CamelCaseModelTrait;
    protected $hidden = ['pivot'];
}