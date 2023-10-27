<script setup>
import Card from 'primevue/card';
import LatesTransactionList from './BudgetBalanceLatestTransactionsList.vue'
import { defineProps } from 'vue';

defineProps({
    title: String,
    subTitle: String,
    value: Number,
    latestTransactions: Array
})
</script>

<template>
    <Card class="w-48 h-72">
        <template #title>
            <div class="flex items-center justify-between">
                <span>{{ title }}</span>
            </div>
            <div class="flex items-center justify-between" :class="value > 0 ? 'text-green-200' : 'text-red-200'">
                <div>
                    <fa icon="fa-eur" />
                    <span class="pl-4">{{ value }}</span>
                </div>
            </div>
        </template>
        <template #content>
            <LatesTransactionList :transactions="latestTransactions" :label="subTitle" />
        </template>
    </Card>
</template>