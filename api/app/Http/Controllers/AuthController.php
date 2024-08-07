<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'user' => ['required', 'unique:users', 'min:6'],
            'name' => ['required', 'min:6'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8'],
            'birthdate' => ['required', 'date']
        ]);

        $user = User::create($data);

        $token = $user->createToken('auth_token')->plainTextToken;

        return compact('user', 'token');
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8'],
        ]);

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response([
                'message' => 'Bad creds'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return compact('user', 'token');
    }
}
