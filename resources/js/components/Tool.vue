<template>
    <div class="relative">
        <div class="card">
            <div class="relative">
                <div class="overflow-hidden overflow-x-auto relative">
                    <table cellpadding="0" cellspacing="0" data-testid="resource-table" class="table w-full table-default">
                        <thead>
                        <tr>
                            <th class="text-left">Writer</th>
                            <th class="text-left">Word Count</th>
                            <th class="text-left">Bonus</th>
                            <th class="text-left">Fine</th>
                            <th class="text-left">Last Month Cost</th>
                            <th class="text-left">Cost</th>
                            <th class="text-left">Final Cost</th>
                            <th class="text-left">Status</th>
                            <th class="text-left">Note</th>
                        </tr>
                        </thead>
                        <tbody>
                        <item-row v-for="item in items" :item="item" :key="item.id" :statuses="statuses" :canEdit="panel.fields[0].canEdit"/>
                        </tbody>
                        <tfoot>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left">{{ numberWithCommas(totalWordCount) }}</th>
                            <th class="text-left">{{ formatMoney(totalBonus) }}</th>
                            <th class="text-left">{{ formatMoney(totalFine) }}</th>
                            <th class="text-left">{{ formatMoney(totalLastMonthCost) }}</th>
                            <th class="text-left">{{ formatMoney(totalCost) }}</th>
                            <th class="text-left">{{ formatMoney(totalFinalCost) }}</th>
                            <th class="text-left"></th>
                            <th class="text-left"></th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemRow from "./ItemRow";

export default {
    props: ['resourceName', 'resourceId', 'panel'],

    data() {
        return {
            items: [],
            statuses: []
        }
    },

    computed: {
        totalWordCount() {
            return this.items.reduce((partial_sum, item) => partial_sum + item.word_count, 0);
        },

        totalBonus() {
            return this.items.reduce((partial_sum, item) => partial_sum + item.bonus, 0);
        },

        totalFine() {
            return this.items.reduce((partial_sum, item) => partial_sum + item.fine, 0);
        },

        totalLastMonthCost() {
            return this.items.reduce((partial_sum, item) => partial_sum + item.last_month_cost, 0);
        },

        totalCost() {
            return this.items.reduce((partial_sum, item) => partial_sum + item.cost, 0);
        },

        totalFinalCost() {
            return this.items.reduce((partial_sum, item) => {
                if (item.status === 'hold' || item.status === 'next-month') {
                    return partial_sum + 0;
                }

                return partial_sum + (item.cost + item.bonus + item.last_month_cost - item.fine);
            }, 0);
        }
    },

    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        formatMoney(number) {
            return parseFloat(number).toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND',
            })
        },
    },

    components: {
        ItemRow
    },

    mounted() {
        Nova.request().get(`/nova-vendor/mtc-finance-report/reports/${this.resourceId}/items`)
            .then(res => {
                this.items = res.data;
            })
            .catch(err => {
                Nova.error(err);
            });

        Nova.request().get('/nova-vendor/mtc-finance-report/report-statuses')
            .then(res => {
                this.statuses = res.data;
            })
            .catch(err => {
                Nova.error(err);
            })
    },
}
</script>
