<script setup>
import { ref, onMounted } from 'vue';
import Card from 'primevue/card';
import AddTransactionDialog from './BudgetBalanceAddTransactionDialog.vue'; 
import BudgetBalanceCard from './BudgetBalanceCard.vue';
import BudgetService from '@/services/BudgetService';

const balance = ref(111.11);
const expenses = ref(-333.33);
const incomes = ref(444.44);
const visible = ref(false);
const expanded = ref(false);
const latestTransactions = ref({});

const toggleBalanceExpansion = () => {
  expanded.value = !expanded.value;
};

const closeDialog = () => {
  visible.value = false;
};

const initTransactions = async () => {
  latestTransactions.value = (await BudgetService.getLatestTransactions()).data;
};

onMounted(() => {
  initTransactions();
});
</script>
<template>
    <div class="flex">
        <BudgetBalanceCard class="rounded-left" title="Balance" subTitle="Latest Transactions : " :value="balance"
            :latestTransactions="latestTransactions.latestCombined" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Expenses" subTitle="Latest Expenses : " :value="expenses"
            :latestTransactions="latestTransactions.latestExpenses" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Incomes" subTitle="Latest Incomes : " :value="incomes"
            :latestTransactions="latestTransactions.latestIncomes" />
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
                    @update-transactions="initTransactions" />
            </template>
        </Card>
    </div>
</template>

<style lang="scss" scoped>
$border-radius: 6px;
$transition-duration: 0.2s;

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