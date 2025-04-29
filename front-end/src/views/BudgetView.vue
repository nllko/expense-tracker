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
  <div class="h-screen p-4">
    <totals-bar/>
  </div>
</template>

<style scoped>

</style>