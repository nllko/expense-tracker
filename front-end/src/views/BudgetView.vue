<script setup>
import TotalsBar from "@/components/budget/totals-bar/TotalsBar.vue";
import {useBudgetStore} from "@/stores/BudgetStore";
import {onBeforeMount} from "vue";

const store = useBudgetStore();

onBeforeMount(() => {
  store.fetchBalances();
  store.fetchTransactions();
});
</script>

<template>
  <div class="h-screen p-4">
    <totals-bar/>
  </div>
</template>

<style scoped>

</style>