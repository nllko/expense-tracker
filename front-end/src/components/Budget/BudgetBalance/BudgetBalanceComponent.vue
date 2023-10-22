<script>
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import AddTransactionForm from './AddTransaction/AddTransactionForm.vue'
import BudgetService from '@/services/BudgetService';
import BudgetBalanceCard from './BudgetBalanceCard.vue';

export default {
    data() {
        return {
            balance: 111.11,
            expenses: -333.33,
            incomes: 444.44,
            visible: false,
            expanded: false,
            latestTransactions: null,
            latestExpenses: null,
            latestIncomes: null
        }
    },
    components: {
        Card,
        Dialog,
        AddTransactionForm,
        BudgetBalanceCard
    },
    methods: {
        toggleBalanceExpansion() {
            this.expanded = !this.expanded;
        }
    },
    async mounted() {
        this.latestTransactions = (await BudgetService.getLatestTransactions()).data;
        this.latestExpenses = (await BudgetService.getLatestExpenses()).data;
        this.latestIncomes = (await BudgetService.getLatestIncomes()).data;
    }
}
</script>
<template>
    <div class="flex">
        <BudgetBalanceCard class="balance-card" title="Balance" subTitle="Latest Transactions : " :value="balance"
            :latestTransactions="latestTransactions" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Expenses" subTitle="Latest Expenses : " :value="expenses"
            :latestTransactions="latestExpenses" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Incomes" subTitle="Latest Incomes : " :value="incomes"
            :latestTransactions="latestIncomes" />
        <Card class="button-container-card">
            <template #title>
                <button class="flex items-center justify-center"
                    :class="{ 'button-animation-right': !expanded, 'button-animation-left': expanded }"
                    @click="toggleBalanceExpansion">
                    <fa :icon="expanded ? 'angles-left' : 'angles-right'" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <button class="flex items-center justify-center" @click="visible = true">
                    <fa icon="fa-plus" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <Dialog v-model:visible="visible" modal header="Transaction" :style="{ width: '35vw' }">
                    <AddTransactionForm />
                </Dialog>
            </template>
        </Card>

    </div>
</template>

<style scoped>
.p-card {
    box-shadow: none;
    border-radius: 0;
}

.balance-card {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.button-container-card {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.button-animation-left {
    transition: 0.2s ease-out;

    &:hover {
        transform: translateX(-0.5rem);
    }
}

.button-animation-right {
    transition: 0.2s ease-out;

    &:hover {
        transform: translateX(0.5rem);
    }
}
</style>