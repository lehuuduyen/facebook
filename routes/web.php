<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('', function () {
    return redirect()->to('admin/access-token');
});
Route::prefix('admin')->group(function () {
    Route::get('access-token', function () {
        return view('src.access_token');
    });
    Route::get('get_number', function () {
        return view('src.get_number');
    });
});
