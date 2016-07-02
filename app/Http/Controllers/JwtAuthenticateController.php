<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Lfalmeida\Lbase\Models\Permission;
use Lfalmeida\Lbase\Models\Role;

class JwtAuthenticateController extends Controller
{

    public function index()
    {
        return response()->json(['auth' => Auth::user(), 'users' => User::all()]);
    }
 

    public function attachPermission(Request $request)
    {
        $role = Role::where('name', '=', $request->input('role'))->first();
        $permission = Permission::where('name', '=', $request->input('name'))->first();
        $role->attachPermission($permission);

        return response()->json("created");
    }

    public function checkRoles(Request $request)
    {
        $user = User::where('email', '=', $request->input('email'))->first();
        Log::info($user);
        return response()->json([
            "user" => $user,
            "owner" => $user->hasRole('owner'),
            "admin" => $user->hasRole('admin'),
            "editUser" => $user->can('edit-user'),
            "listUsers" => $user->can('list-users')
        ]);
    }

}

