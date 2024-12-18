<script setup>
import {useBudgetStore} from "@/stores/BudgetStore";
import BalanceCard from "@/components/budget/totals-bar/components/BalanceCard.vue";

const store = useBudgetStore();
</script>

<template>
  <div class="flex">
    <balance-card title="Total" :balance="store.getBalance" :latest="[]" />
    <balance-card title="Expense" :balance="store.getExpenses" :latest="[]" />
    <balance-card title="Income" :balance="store.getIncome" :latest="[]" />
  </div>
</template>

<style scoped>

</style>