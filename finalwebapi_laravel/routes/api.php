<?php

use App\Http\Controllers\CategoryControllerAPI;
use App\Http\Controllers\ProductControllerAPI;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\Auth;
use App\Http\Controllers\AuthControllerAPI;
use App\Http\Controllers\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/viewCategory',[CategoryControllerAPI::class,'viewCategory']);


Route::get('/viewProduct',[ProductControllerAPI::class,'viewProduct']);

Route::post('/register',[AuthControllerAPI::class,'register']);
Route::post('/login',[AuthControllerAPI::class,'login']);

//Route of Orders
Route::post('/addOrder',[OrdersController::class,'addOrder']);
Route::post('/updateOrder',[OrdersController::class,'updateOrder']);
Route::post('/deleteOrder',[OrdersController::class,'deleteOrder']);
Route::get('/viewOrder',[OrdersController::class,'viewOrder']);




//route customer
Route::post('/addCustomer',[CustomerController::class,'store']);
Route::post('/updateCustomer',[CustomerController::class,'update']);
Route::get('/viewCustomer',[CustomerController::class,'index']);
Route::post('/deleteCustomer',[CustomerController::class,'deleteCustomer']);


Route::middleware(['auth:sanctum'])->group(function(){

    Route::post('/logout',[AuthControllerAPI::class,'logout']);
    
Route::post('/addCategory',[CategoryControllerAPI::class,'addCategory']);
Route::post('/updateCategory',[CategoryControllerAPI::class,'updateCategory']);
Route::post('/deleteCategory',[CategoryControllerAPI::class,'deleteCategory']);

Route::post('/addProduct',[ProductControllerAPI::class,'addProduct']);
Route::post('/updateProduct',[ProductControllerAPI::class,'updateProduct']);
Route::post('/deleteProduct',[ProductControllerAPI::class,'deleteProduct']);

});



