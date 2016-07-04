<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Lfalmeida\Lbase\Models\Permission;
use Lfalmeida\Lbase\Models\Role;

class JwtAuthenticateController extends Controller
{


    public function attachPermission(Request $request)
    {
        $role = Role::where('name', '=', $request->input('role'))->first();
        $permission = Permission::where('name', '=', $request->input('name'))->first();
        $role->attachPermission($permission);

        return response()->json("created");
    }


}

