<?php

use Illuminate\Support\Facades\Route;
use Phuclh\MtcFinanceReport\Http\Controllers\ReportDetail;
use Phuclh\MtcFinanceReport\Http\Controllers\ReportItemList;
use Phuclh\MtcFinanceReport\Http\Controllers\StatusList;
use Phuclh\MtcFinanceReport\Http\Controllers\UpdateBonus;
use Phuclh\MtcFinanceReport\Http\Controllers\UpdateFine;
use Phuclh\MtcFinanceReport\Http\Controllers\UpdateLastMonthCost;
use Phuclh\MtcFinanceReport\Http\Controllers\UpdateNote;
use Phuclh\MtcFinanceReport\Http\Controllers\UpdateStatus;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. You're free to add
| as many additional routes to this file as your tool may require.
|
*/

//Route::get('reports/{financeReport}', ReportDetail::class);
Route::get('reports/{financeReport}/items', ReportItemList::class);
Route::get('report-statuses', StatusList::class);

Route::post('report-items/{reportItem}/update-bonus', UpdateBonus::class);
Route::post('report-items/{reportItem}/update-fine', UpdateFine::class);
Route::post('report-items/{reportItem}/update-last-month-cost', UpdateLastMonthCost::class);
Route::post('report-items/{reportItem}/update-status', UpdateStatus::class);
Route::post('report-items/{reportItem}/update-note', UpdateNote::class);
