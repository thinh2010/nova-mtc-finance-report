<?php namespace Phuclh\MtcFinanceReport\Http\Controllers;

use App\Models\FinanceReportItem;
use Illuminate\Routing\Controller;
use Laravel\Nova\Http\Requests\NovaRequest;

class UpdateBonus extends Controller
{
    /**
     * @param FinanceReportItem $reportItem
     * @param NovaRequest $request
     * @return FinanceReportItem
     */
    public function __invoke(FinanceReportItem $reportItem, NovaRequest $request)
    {
        $request->validate([
            'bonus' => 'required|integer'
        ]);

        $reportItem->update([
            'bonus' => $request->bonus
        ]);

        return $reportItem->refresh();
    }
}
