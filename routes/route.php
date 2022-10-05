<?php

use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\BlastController;
use App\Http\Controllers\Template;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReportController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



  
Route::get('homePage', [HomeController::class,'homePage'])->name('homePage');
Route::get('report', [ReportController::class,'index'])->name('report');
Route::get('template', [Template::class,'index'])->name('template');
Route::get('template/create/{id?}', [Template::class,'create'])->name('createtemplate');
Route::any('template/save', [Template::class,'save'])->name('saveTemplate');
Route::any('template/delete', [Template::class,'destroy'])->name('deleteTemplate');
Route::any('retryBlast', [BlastController::class,'retryBlast'])->name('retryBlast');
        
 





