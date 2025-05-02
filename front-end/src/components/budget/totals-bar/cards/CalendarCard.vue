<script setup>
import {DatePicker} from "primevue";
import {useBudgetStore} from "@/stores/BudgetStore";

const store = useBudgetStore();

const onDateChange = () => {
  store.fetchBalances();
  store.fetchTransactions();
};
</script>

<template>
  <div class="bg-mantle flex py-4">
    <DatePicker v-model="store.selectedDate" :max-date="new Date()" view="month" inline @update:model-value="onDateChange" :show-button-bar="true" />
  </div>
</template>

<style scoped>

</style>