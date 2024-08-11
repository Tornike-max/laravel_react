<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::create($validatedData);

        $token = $user->createToken('main')->plainTextToken;

        $response = response([
            'user' => $user,
            'token' => $token
        ], 200, []);

        return $response;
    }

    public function login(LoginRequest $request)
    {
        $validatedData = $request->validated();
        $remember = $validatedData['remember'] ?? false;
        unset($validatedData['remember']);

        if (!Auth::attempt($validatedData, $remember)) {
            return response([
                'error' => 'The provided credentials are not correct'
            ], '422');
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ], 200);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();

        $user->tokens()->delete();

        $request->user()->currentAccessToken()->delete();
        return response([
            'success' => true
        ], 200);
    }
}
