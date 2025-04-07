<script setup>
import {useBudgetStore} from "@/stores/BudgetStore";
import BalanceCard from "@/components/budget/totals-bar/components/BalanceCard.vue";
import ButtonsCard from "@/components/budget/totals-bar/components/ButtonsCard.vue";

const store = useBudgetStore();
</script>

<template>
  <div class="flex h-min">
    <balance-card class="card-left" title="Total" subtitle="Latest transactions :" :balance="store.getTotal" :latest="store.getLatestTransactions" />
    <balance-card v-show="store.isExpanded" title="Expense" subtitle="Latest expenses :" :balance="store.getExpenses" :latest="store.getLatestExpenses" />
    <balance-card v-show="store.isExpanded" title="Income" subtitle="Latest incomes :" :balance="store.getIncome" :latest="store.getLatestIncomes" />
    <buttons-card class="card-right" />
  </div>
</template>

<style scoped>
.card-left {
  border-radius: 6px 0 0 6px;
}
.card-right {
  border-radius: 0 6px 6px 0;
}

</style>