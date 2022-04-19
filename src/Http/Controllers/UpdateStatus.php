<?php namespace Phuclh\MtcFinanceReport\Http\Controllers;

use App\Enums\FinanceReportItemStatus;
use App\Models\FinanceReportItem;
use Illuminate\Routing\Controller;
use Laravel\Nova\Http\Requests\NovaRequest;

class UpdateStatus extends Controller
{
    /**
     * @param FinanceReportItem $reportItem
     * @param NovaRequest $request
     * @return FinanceReportItem
     * @throws \Exception
     */
    public function __invoke(FinanceReportItem $reportItem, NovaRequest $request)
    {
        if (!$request->user()->can('mark finance report item paid') && $request->status === FinanceReportItemStatus::PAID) {
            throw new \Exception('You don\'t have permission to do this action.');
        }

        $request->validate([
            'status' => 'required'
        ]);

        $reportItem->update(['status' => $request->status]);

        return $reportItem->refresh();
    }
}
