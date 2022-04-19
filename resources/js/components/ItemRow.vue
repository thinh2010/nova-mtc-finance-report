<template>
    <tr>
        <td>
            <div class="text-left text-left">
                <router-link
                    class="no-underline dim text-primary font-bold"
                    :to="{
                      name: 'detail',
                      params: {
                        resourceName: 'users',
                        resourceId: item.writer_id,
                      },
                    }"
                >
                    <span class="whitespace-no-wrap">{{ item.writer_name }}</span>
                </router-link>
            </div>
        </td>
        <td>
            <div class="text-left text-left">
                <span class="whitespace-no-wrap">{{ numberWithCommas(item.word_count) }}</span>
            </div>
        </td>
        <td>
            <div class="text-left text-left">
                <span v-if="!isEditable" class="whitespace-no-wrap">{{ formatMoney(item.bonus) }}</span>
                <input v-else type="text" v-model.lazy="bonus" placeholder="Bonus" class="w-full form-control form-input form-input-bordered">
            </div>
        </td>
        <td>
            <div class="text-left text-left">
                <span v-if="!isEditable" class="whitespace-no-wrap">{{ formatMoney(item.fine) }}</span>
                <input v-else type="text" v-model.lazy="fine" placeholder="Fine" class="w-full form-control form-input form-input-bordered">
            </div>
        </td>
        <td>
            <div class="text-left text-left">
                <span v-if="!isEditable" class="whitespace-no-wrap">{{ formatMoney(item.last_month_cost) }}</span>
                <input v-else type="text" v-model.lazy="lastMonthCost" placeholder="Last Month Cost" class="w-full form-control form-input form-input-bordered">
            </div>
        </td>
        <td>
            <div class="text-left text-left">
                <span class="whitespace-no-wrap">{{ formatMoney(cost) }}</span>
            </div>
        </td>
        <td>
            <div class="text-left text-left">
                <span class="whitespace-no-wrap">{{ formatMoney(finalCost) }}</span>
            </div>
        </td>
        <td>
            <div class="text-left text-left">
                <span v-if="!isEditable" class="whitespace-no-wrap">{{ item.status.toUpperCase() }}</span>
                <select v-else v-model="status" @change="updateStatus" class="form-control form-select w-full">
                    <option value="" selected="selected" disabled="disabled">—</option>
                    <option v-for="(name, code) in statuses" :key="code" :value="code">
                        {{ name }}
                    </option>
                </select>
            </div>
        </td>
        <td>
            <div class="text-left text-left">
                <span v-if="!isEditable" class="whitespace-no-wrap">{{ item.note }}</span>
                <textarea v-else v-model="note" @change="updateNote" id="description" rows="3" placeholder="Note" class="w-full form-control form-input form-input-bordered py-3 h-auto"></textarea>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['item', 'statuses', 'canEdit'],

    data() {
        return {
            bonus: this.item.bonus,
            fine: this.item.fine,
            lastMonthCost: this.item.last_month_cost,
            cost: this.item.cost,
            finalCost: this.item.final_cost,
            status: this.item.status,
            note: this.item.note
        }
    },

    watch: {
        bonus: function (val) {
            this.updateBonus(val);
        },

        fine: function (val) {
            this.updateFine(val);
        },

        lastMonthCost: function (val) {
            this.updateLastMonthCost(val);
        }
    },

    computed: {
        isEditable() {
            return this.canEdit;
        }
    },

    methods: {
        formatMoney(number) {
            return parseFloat(number).toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND',
            })
        },

        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        updateBonus(bonus) {
            Nova.request().post(`/nova-vendor/mtc-finance-report/report-items/${this.item.id}/update-bonus`, {
                bonus: bonus
            }).then(res => {
                this.finalCost = this.calFinalCost();
            }).catch(err => {
                Nova.error(err);
            })
        },

        updateFine(fine) {
            Nova.request().post(`/nova-vendor/mtc-finance-report/report-items/${this.item.id}/update-fine`, {
                fine: fine
            }).then(res => {
                this.finalCost = this.calFinalCost();
            }).catch(err => {
                Nova.error(err);
            })
        },

        updateLastMonthCost(lastMonthCost) {
            Nova.request().post(`/nova-vendor/mtc-finance-report/report-items/${this.item.id}/update-last-month-cost`, {
                last_month_cost: lastMonthCost
            }).then(res => {
                this.finalCost = this.calFinalCost();
            }).catch(err => {
                Nova.error(err);
            })
        },

        updateStatus(e) {
            Nova.request().post(`/nova-vendor/mtc-finance-report/report-items/${this.item.id}/update-status`, {
                status: e.target.value
            }).then(res => {
                this.status = res.data.status;
                Nova.success('Change status to ' + this.status + ' successfully!');
            }).catch(err => {
                Nova.error(err);
            })
        },

        updateNote(e) {
            Nova.request().post(`/nova-vendor/mtc-finance-report/report-items/${this.item.id}/update-note`, {
                note: e.target.value
            }).then(res => {
                this.note = res.data.note;
                Nova.success('Update note successfully!');
            }).catch(err => {
                Nova.error(err);
            })
        },

        calFinalCost() {
            return parseInt(this.cost) + parseInt(this.lastMonthCost) + parseInt(this.bonus) - parseInt(this.fine);
        }
    }
}
</script>

<style>
</style>
