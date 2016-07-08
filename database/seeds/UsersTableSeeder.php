<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        DB::table('users')->delete();

        $faker = Faker\Factory::create('pt_BR');

        $entity = new App\Models\User();
        $entity->name = 'Administrador';
        $entity->email = 'adm@adm.com';
        $entity->password = Hash::make('a1s2d3f4');
        $entity->save();

        for ($i = 0; $i <= 99; $i++) {
            $entity = new App\Models\User();
            $entity->name = sprintf('%s %s', $faker->firstName, $faker->lastName);
            $entity->email = $faker->email;
            $entity->password = Hash::make('secret');
            $entity->save();
        }


        Model::reguard();
    }
}
