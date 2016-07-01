<?php
namespace Lfalmeida\Lbase\Models;

use Lfalmeida\Lbase\Traits\CamelCaseModelTrait;
use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission
{
    use CamelCaseModelTrait;
    protected $hidden = ['pivot'];
}