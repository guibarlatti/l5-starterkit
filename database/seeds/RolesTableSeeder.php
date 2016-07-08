<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        DB::table('roles')->delete();

        $entity = new Lfalmeida\Lbase\Models\Role();
        $entity->name = 'admin';
        $entity->displayName = 'Admin';
        $entity->description = 'Acesso Administrativo.';
        $entity->save();

        DB::table('role_user')->insert([
            'user_id' => 1,
            'role_id' => 1
        ]);

        Model::reguard();
    }
}
