<?php namespace Phuclh\MtcFinanceReport\Http\Controllers;

use App\Enums\FinanceReportItemStatus;
use App\Models\FinanceReport;
use Illuminate\Routing\Controller;
use Laravel\Nova\Http\Requests\NovaRequest;

class StatusList extends Controller
{
    /**
     * @param FinanceReport $financeReport
     * @param NovaRequest $request
     * @return string[]
     */
    public function __invoke(FinanceReport $financeReport, NovaRequest $request)
    {
        return [
            FinanceReportItemStatus::HOLD       => 'HOLD',
            FinanceReportItemStatus::NEXT_MONTH => 'NEXT MONTH',
            FinanceReportItemStatus::PAID       => 'PAID',
            FinanceReportItemStatus::DONE       => 'DONE',
        ];
    }
}
