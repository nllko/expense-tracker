<script setup>
import TotalsBar from "@/components/budget/totals-bar/TotalsBar.vue";
import {useBudgetStore} from "@/stores/BudgetStore";
import {onBeforeMount} from "vue";
import TransactionTable from "@/components/budget/transaction-table/TransactionTable.vue";

const store = useBudgetStore();

onBeforeMount(() => {
  store.fetchBalances();
  store.fetchTransactions();
});
</script>

<template>
  <div class="flex flex-col h-full p-4">
    <totals-bar/>
    <transaction-table class="mt-auto" />
  </div>
</template>

<style scoped>

</style>