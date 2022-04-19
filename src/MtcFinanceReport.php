<?php

namespace Phuclh\MtcFinanceReport;

use Laravel\Nova\ResourceTool;

class MtcFinanceReport extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Mtc Finance Report';
    }

    /**
     * @param \Closure $callback
     * @return MtcFinanceReport
     */
    public function canEdit(\Closure $callback)
    {
        return $this->withMeta(['canEdit' => $callback()]);
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'mtc-finance-report';
    }
}
