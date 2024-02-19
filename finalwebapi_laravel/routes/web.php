<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductControllerAPI;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/customer', [CustomerController::class,'index'])->name('customer.index');
Route::get('/customer/create', [CustomerController::class,'create'])->name('customer.create');
Route::post('/customer', [CustomerController::class,'store'])->name('customer.store');
Route::get('/customer/{customer}/edit', [CustomerController::class,'edit'])->name('customer.edit');
Route::put('/customer/{customer}/update', [CustomerController::class,'update'])->name('customer.edit');
Route::delete('/customer/{customer}/destroy', [CustomerController::class,'destroy'])->name('customer.destroy');