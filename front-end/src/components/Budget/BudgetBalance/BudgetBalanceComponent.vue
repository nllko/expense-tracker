<script>
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import AddTransactionForm from './AddTransaction/AddTransactionForm.vue'
import BudgetService from '@/services/BudgetService';
import LatesTransactionList from './LatestTransactions/LatestTransactionsList.vue'

export default {
    data() {
        return {
            balance: 123.45,
            visible: true,
            latestTransactions: null
        }
    },
    components: {
        Card,
        Dialog,
        AddTransactionForm,
        LatesTransactionList
    },
    async mounted() {
        this.latestTransactions = (await BudgetService.getLatestTransactions()).data;
    }
}
</script>
<template>
    <Card class="w-64">
        <template #title>
            <div class="flex items-center justify-between">
                <span>Balance</span>
                <button class="flex items-center justify-center">
                    <fa icon="angles-right" class="text-green-500 hover:text-green-300 p-2" />
                </button>
            </div>
            <div class="flex items-center justify-between" :class="balance > 0 ? 'text-green-200' : 'text-red-200'">
                <div>
                    <fa icon="fa-eur" />
                    <span class="pl-4">{{ balance }}</span>
                </div>
                <button class="flex items-center justify-center" @click="visible = true">
                    <fa icon="fa-plus" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <Dialog v-model:visible="visible" modal header="Transaction" :style="{ width: '35vw' }">
                    <AddTransactionForm />
                </Dialog>
            </div>
        </template>
        <template #content>
            <LatesTransactionList :transactions="latestTransactions" />
        </template>
    </Card>
</template>