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

// Route::get('/', function () {
//     return view('arif');
// });

Route::get('/','StudentController@index');



// Route::get('user/{id}', function ($id) {
//     return 'User '.$id;
// });

// Route::get('{post}/{comment}', function ($postId, $commentId) {
//      $sum = $postId+$commentId;
//      return $sum;
// });



