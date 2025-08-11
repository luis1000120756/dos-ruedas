<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Routes for authentication user and user register
Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [UserController::class, 'register']);
});

//Routes for dashboardCli
Route::middleware('auth:sanctum')->group(function (){
    Route::get('dashboardCli/spareParts', [ProductController::class, 'getProducts']);
});



