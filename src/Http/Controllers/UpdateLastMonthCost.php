<?php namespace Phuclh\MtcFinanceReport\Http\Controllers;

use App\Models\FinanceReportItem;
use Illuminate\Routing\Controller;
use Laravel\Nova\Http\Requests\NovaRequest;

class UpdateLastMonthCost extends Controller
{
    /**
     * @param FinanceReportItem $reportItem
     * @param NovaRequest $request
     * @return FinanceReportItem
     */
    public function __invoke(FinanceReportItem $reportItem, NovaRequest $request)
    {
        $request->validate([
            'last_month_cost' => 'required|integer'
        ]);

        $reportItem->update([
            'last_month_cost' => $request->last_month_cost
        ]);

        return $reportItem->refresh();
    }
}
