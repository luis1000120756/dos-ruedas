<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function register(Request $request)
    {

        $newUser = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        if ($newUser) {
            $code_verification = Str::random(4);
            return response()->json(['code_verification' => $code_verification, 'messageSuccessfull' => 'Registro exitoso']);
        }else{
            return response()->json(['messageError' => 'Error en el registro de usuario']);
        }
    }
}
