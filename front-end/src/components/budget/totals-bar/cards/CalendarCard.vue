<script setup>
import {DatePicker} from "primevue";
import {useBudgetStore} from "@/stores/BudgetStore";
import {ref} from "vue";

const store = useBudgetStore();

const date = ref(store.selectedDate);

const onDateChange = (date) => {
  store.changeDate(date)
}
</script>

<template>
  <div class="bg-mantle py-2">
    <DatePicker v-model="date" :max-date="new Date()" view="month" inline @date-select="onDateChange" />
  </div>
</template>

<style scoped>

</style>