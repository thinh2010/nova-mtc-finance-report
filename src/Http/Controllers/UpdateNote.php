<?php namespace Phuclh\MtcFinanceReport\Http\Controllers;

use App\Models\FinanceReportItem;
use Illuminate\Routing\Controller;
use Laravel\Nova\Http\Requests\NovaRequest;

class UpdateNote extends Controller
{
    /**
     * @param FinanceReportItem $reportItem
     * @param NovaRequest $request
     * @return FinanceReportItem
     */
    public function __invoke(FinanceReportItem $reportItem, NovaRequest $request)
    {
        $reportItem->update(['note' => $request->note]);

        return $reportItem->refresh();
    }
}
