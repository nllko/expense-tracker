<script setup>
import Card from 'primevue/card';
import LatesTransactionList from './BudgetBalanceLatestTransactionsList.vue'
import BudgetStore from '@/stores/budgetBalanceStore'
import { defineProps, computed } from 'vue';

const props = defineProps({
    title: String,
    subTitle: String,
    type: String,
    selectedDate: Date,
    updateData: Boolean,
})

const latestTransactions = computed(() => BudgetStore.getters.getTransactionsByType(props.type));
const amount = computed(() => BudgetStore.getters.getBalanceByType(props.type));

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
    <Card class="h-72 min-w-[12rem]">
        <template #title>
            <div class="flex items-center justify-between">
                <span>{{ title }}</span>
            </div>
            <div class="flex items-center justify-between" :class="getClass(type)">
                <div class="flex items-center">
                    <fa :icon="getIcon(type)" />
                    <span class="px-2">{{ amount }}</span>
                    <fa icon="fa-eur" />
                </div>
            </div>
        </template>
        <template #content>
            <LatesTransactionList :transactions="latestTransactions" :label="subTitle" />
        </template>
    </Card>
</template>