<script setup>
import TotalsBar from "@/components/budget/totals-bar/TotalsBar.vue";
import {useBudgetStore} from "@/stores/BudgetStore";
import {onMounted} from "vue";

const store = useBudgetStore();

onMounted(() => {
  store.init();
})
</script>

<template>
  <totals-bar/>

</template>

<style scoped>

</style>