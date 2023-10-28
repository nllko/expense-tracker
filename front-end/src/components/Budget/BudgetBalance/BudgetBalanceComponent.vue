<script setup>
import { ref } from 'vue';
import { areDatesOnSameMonthAndYear, getDateMonth } from '@/utils/dateUtils'
import Card from 'primevue/card';
import AddTransactionDialog from './BudgetBalanceAddTransactionDialog.vue';
import BudgetBalanceCard from './BudgetBalanceCard.vue';
import Calendar from 'primevue/calendar';

const visible = ref(false);
const expanded = ref(false);
const selectedDate = ref(new Date())
const updateData = ref(false);

const toggleBalanceExpansion = () => {
    expanded.value = !expanded.value;
};

const closeDialog = () => {
    visible.value = false;
};

</script>
<template>
    <div class="flex h-max">
        <BudgetBalanceCard class="rounded-left" title="Balance"
            :subTitle="areDatesOnSameMonthAndYear(selectedDate, new Date()) ? 'Latest Transactions :' : `${getDateMonth(selectedDate)}'s transactions:`"
            :selectedDate="selectedDate" :updateData="updateData" @data-updated="updateData = false" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Expenses"
            :subTitle="areDatesOnSameMonthAndYear(selectedDate, new Date()) ? 'Latest Expenses :' : `${getDateMonth(selectedDate)}'s expenses :`"
            type="expense" :selectedDate="selectedDate" :updateData="updateData" @data-updated="updateData = false" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Incomes"
            :subTitle="areDatesOnSameMonthAndYear(selectedDate, new Date()) ? 'Latest Incomes :' : `${getDateMonth(selectedDate)}'s incomes :`"
            type="income" :selectedDate="selectedDate" :updateData="updateData" @data-updated="updateData = false" />
        <Card class="pl-4 w-56 custom-padding" v-if="expanded">
            <template #content>
                <Calendar class="h-64" v-model="selectedDate" view="month" dateFormat="mm/yy" inline
                    :maxDate="new Date()" />
            </template>
        </Card>
        <Card class="rounded-right">
            <template #title>
                <button class="flex items-center justify-center transition-hover"
                    :class="{ 'translate-right-on-hover': !expanded, 'translate-left-on-hover': expanded }"
                    @click="toggleBalanceExpansion">
                    <fa :icon="expanded ? 'angles-left' : 'angles-right'" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <button class="flex items-center justify-center transition-hover scale-on-hover" @click="visible = true">
                    <fa icon="fa-plus" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <AddTransactionDialog :visible="visible" @close-dialog="closeDialog"
                    @update-transactions="updateData = true" />
            </template>
        </Card>
    </div>
</template>

<style lang="scss" scoped>
$border-radius: 6px;
$transition-duration: 0.2s;

.custom-padding {
    ::v-deep(.p-card-body) {
        padding: 0;
    }
}

::v-deep(.p-datepicker-header) {
    padding-top: 0;
    padding-bottom: 0;
}

.p-card {
    box-shadow: none;
    border-radius: 0;
}

.rounded {
    &-left {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
    }

    &-right {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
    }
}

.transition-hover {
    transition: transform $transition-duration ease-out;
}

.translate {
    &-left-on-hover {
        &:hover {
            transform: translateX(-0.5rem);
        }
    }

    &-right-on-hover {
        &:hover {
            transform: translateX(0.5rem);
        }
    }
}

.scale-on-hover {
    &:hover {
        transform: scale(1.5);
    }
}
</style>