<script>
import Card from 'primevue/card';
import AddTransactionDialog from './BudgetBalanceAddTransactionDialog.vue'
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
            latestExpenseTransactions: null,
            latestIncomeTransactions: null,
            test: null
        }
    },
    components: {
        Card,
        AddTransactionDialog,
        BudgetBalanceCard,
    },
    methods: {
        toggleBalanceExpansion() {
            this.expanded = !this.expanded;
        },
        closeDialog() {
            this.visible = false;
        },
        updateTransactions() {
            this.initTransactions();
        },
        async initTransactions() {
            this.latestTransactions = (await BudgetService.getLatestTransactionsByType()).data;
            this.latestExpenseTransactions = (await BudgetService.getLatestTransactionsByType('expense')).data;
            this.latestIncomeTransactions = (await BudgetService.getLatestTransactionsByType('income')).data;
        }
    },
    async mounted() {
        this.initTransactions();
    }
}
</script>
<template>
    <div class="flex">
        <BudgetBalanceCard class="balance-card" title="Balance" subTitle="Latest Transactions : " :value="balance"
            :latestTransactions="latestTransactions" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Expenses" subTitle="Latest Expenses : " :value="expenses"
            :latestTransactions="latestExpenseTransactions" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Incomes" subTitle="Latest Incomes : " :value="incomes"
            :latestTransactions="latestIncomeTransactions" />
        <Card class="button-container-card">
            <template #title>
                <button class="flex items-center justify-center"
                    :class="{ 'button-animation-right': !expanded, 'button-animation-left': expanded }"
                    @click="toggleBalanceExpansion">
                    <fa :icon="expanded ? 'angles-left' : 'angles-right'" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <button class="flex items-center justify-center button-animation-scale" @click="visible = true">
                    <fa icon="fa-plus" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <AddTransactionDialog :visible="visible" @close-dialog="closeDialog" @update-transactions="initTransactions" />
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

.button-animation-scale {
    transition: 0.2s ease-out;

    &:hover {
        transform: scale(1.5);
    }
}
</style>