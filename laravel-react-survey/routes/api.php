<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/users/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::apiResource('survey', [SurveyController::class])->middleware('auth:sanctum');

Route::post('/users/signup', [AuthController::class, 'signup']);
Route::post('/users/login', [AuthController::class, 'login']);
