<script setup>
import {DataTable, Column, Tag} from "primevue";
import {useBudgetStore} from "@/stores/BudgetStore";
import CurrencyText from "@/components/common/fields/CurrencyText.vue";
import {formatStringToIso} from "@/utils/dateUtils";

const budgetStore = useBudgetStore();

const getSeverity = (type) => {
  return type === "EXPENSE" ? "danger" : "success";
};

const formatString = (string, maxChars) => {
  if (!string) return;
  return string.length > maxChars ? string.slice(0, maxChars - 3) + '...' : string;
}
</script>

<template>
  <div class="bg-mantle rounded p-2">
    <DataTable :value="budgetStore.transactions"
               paginator
               :rows="5"
               :rowsPerPageOptions="[5, 10, 20, 50]"
               removableSort
               stripedRows>
      <template #empty> No transactions found. </template>
      <template #loading> Loading transactions data. Please wait. </template>
      <Column field="name" header="Name" style="width: 15%" sortable></Column>
      <Column field="description" header="Description"  sortable>
        <template #body="{ data }">
          {{formatString(data.description, 70)}}
        </template>
      </Column>
      <Column field="amount" header="Amount" style="width: 10%" sortable>
        <template #body="{ data }">
          <CurrencyText :balance="data.amount" />
        </template>
      </Column>
      <Column field="type" header="Type" style="width: 5%" sortable>
        <template #body="{ data }">
          <Tag :value="data.type" :severity="getSeverity(data.type)" />
        </template>
      </Column>
      <Column field="date" header="Date" style="width: 5%" sortable>
        <template #body="{ data }">
          {{formatStringToIso(data.date)}}
        </template>
      </Column>
      <Column></Column>
    </DataTable>
  </div>

</template>

<style scoped>
</style>