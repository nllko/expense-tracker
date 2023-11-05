<script setup>
import Card from 'primevue/card';
import { areDatesOnSameMonthAndYear, getDateMonth } from '@/utils/dateUtils'
import LatesTransactionList from './BudgetBalanceLatestTransactionsList.vue'
import BudgetStore from '@/stores/budgetBalanceStore'
import { defineProps, computed } from 'vue';

const props = defineProps({
    title: String,
    type: String,
    selectedDate: Date,
    isTotalBalance: Boolean,
})

const latestTransactions = computed(() => BudgetStore.getters.getTransactionsByType(props.type));
const amount = computed(() => BudgetStore.getters.getBalanceByType(props.type));

const getTitle = computed(() => {
    return props.isTotalBalance ? `Total ${props.title}` : `${getDateMonth(props.selectedDate)}'s ${props.title}`;
})

const getSubtitle = (type) => {
    const string = type ? type : 'transaction';
    return areDatesOnSameMonthAndYear(props.selectedDate, new Date()) ? `Latest ${string}s :` : `${getDateMonth(props.selectedDate)}'s ${string}s:`
}

const getClass = (type) => {
    if (type === 'expense') {
        return 'text-red-200';
    }
    if (type === 'income') {
        return 'text-green-200';
    }
    return amount.value > 0 ? 'text-green-200' : 'text-red-200';
}

const getIcon = (type) => {
    if (type === 'expense') {
        return 'fa-minus';
    }
    if (type === 'income') {
        return 'fa-plus';
    }
    return amount.value > 0 ? 'fa-plus' : 'fa-minus';
}
</script>

<template>
    <Card class="min-h-[18rem] min-w-[12rem]">
        <template #title>
            <div class="flex items-center justify-between">
                <span>{{ getTitle }}</span>
            </div>
            <div class="flex items-center justify-between" :class="getClass(type)">
                <div v-if="!!amount" class="flex items-center">
                    <fa :icon="getIcon(type)" />
                    <span class="px-2">{{ (Math.round(Math.abs(amount) * 100) / 100) }}</span>
                    <fa icon="fa-eur" />
                </div>
            </div>
        </template>
        <template #content>
            <LatesTransactionList :transactions="latestTransactions" :label="getSubtitle(type)" />
        </template>
    </Card>
</template>