<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user || ! Hash::check($request->password, $user->password)) {
            return response()->json(['messageError' => 'correo o contraseña incorrecta'], 401);
        }
        $token = $user->createToken('login_token')->plainTextToken;
        return response()->json(['access_token' => $token, 'token_type' => 'Bearer', 'user' => $user], 200);
    }
}
