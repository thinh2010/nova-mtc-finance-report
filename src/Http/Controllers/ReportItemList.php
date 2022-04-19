<?php namespace Phuclh\MtcFinanceReport\Http\Controllers;

use App\Models\Article;
use App\Models\FinanceReport;
use App\Models\FinanceReportItem;
use Illuminate\Routing\Controller;
use Illuminate\Support\Arr;

class ReportItemList extends Controller
{
    /**
     * @param FinanceReport $financeReport
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function __invoke(FinanceReport $financeReport)
    {
        $financeReportItems = $financeReport->reportItems()
            ->with([
                'writer',
                'writer.articles' => fn($query) => $query->whereMonth('writer_deadline', $financeReport->created_at)
                    ->whereYear('writer_deadline', $financeReport->created_at)
                    ->where(fn($query) => $query->whereNotNull('article_url')->orWhere('article_url', '!=', ''))]
            )
            ->orderBy('writer_name', 'desc')
            ->get();

        return $financeReportItems->map(function (FinanceReportItem $financeReportItem) use ($financeReport) {
            $writer = $financeReportItem->writer;

            $wordCount = $financeReport->is_lock ? $financeReportItem->word_count : (optional($writer)->articles ? optional($writer)->articles->sum('word_count') : 0);
            $articleCost = $financeReport->is_lock ? $financeReportItem->cost : (optional($writer)->articles ? optional($writer)->articles->sum(fn(Article $article) => $article->price) : 0);
            $lastMonthCost = $financeReportItem->last_month_cost ?? 0;
            $fine = $financeReportItem->fine ?? 0;
            $bonus = $financeReportItem->bonus ?? 0;
            $finalCost = $financeReport->is_lock ? $financeReportItem->final_cost : $articleCost + $lastMonthCost + $bonus - $fine;

            return [
                'id'              => $financeReportItem->id,
                'writer_name'     => Arr::get($financeReportItem, 'writer.name', $financeReportItem->writer_name),
                'writer_id'       => $writer ? $writer->id : '—',
                'word_count'      => $wordCount,
                'last_month_cost' => $lastMonthCost,
                'fine'            => $fine,
                'bonus'           => $bonus,
                'cost'            => $articleCost,
                'final_cost'      => $finalCost,
                'status'          => $financeReportItem->status,
                'note'            => $financeReportItem->note
            ];
        });
    }
}
