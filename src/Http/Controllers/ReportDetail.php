<?php namespace Phuclh\MtcFinanceReport\Http\Controllers;

use App\Models\FinanceReport;
use Illuminate\Routing\Controller;

class ReportDetail extends Controller
{
    /**
     * @param FinanceReport $financeReport
     * @return FinanceReport
     */
    public function __invoke(FinanceReport $financeReport)
    {
        return $financeReport;
    }
}
