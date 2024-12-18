<script setup>
import BalanceCard from "@/components/budget/totals-bar/components/BalanceCard.vue";
import {useBudgetStore} from "@/stores/BudgetStore";

const store = useBudgetStore();
const latest = ["Test", "Test2", "Test3"];
</script>

<template>
  <balance-card title="Total Balance" :balance="store.getTotalBalance" :latest="latest"></balance-card>
</template>

<style scoped>

</style>