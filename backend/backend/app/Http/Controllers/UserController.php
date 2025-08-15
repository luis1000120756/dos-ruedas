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
            'code_verification' => Str::random(4),
        ]);

        if ($newUser) {
            $code = $newUser->code_verification;
            return response()->json(['code_verification' => $code, 'messageSuccessfull' => 'Registro exitoso']);
        } else {
            return response()->json(['messageError' => 'Error en el registro de usuario']);
        }
    }

    public function verifyCode(Request $request)
    {

        $user = User::where('code_verification', $request->code_verification)->first();

        if ($user) {
            $token = $user->createToken('login_token')->plainTextToken;
            return response()->json(['successMessage' => 'Verificacion de código exitosa', 'access_token' => $token]);
        } else {
            return response()->json(['errorMessage' => 'verificación de código inválida']);
        }
    }
}
