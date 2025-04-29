<script setup>
import {useBudgetStore} from "@/stores/BudgetStore";
import AddTransactionButton from "@/components/budget/add-transaction/TransactionFormModal.vue";

const store = useBudgetStore();
</script>

<template>
  <div class="bg-mantle flex flex-col p-2">
    <button class="green-btn" :class="store.isExpanded ? 'btn-move-l' : 'btn-move-r'" @click="store.toggleExpanded()">
      <fa-icon v-if="!store.isExpanded" icon="angles-right"/>
      <fa-icon v-if="store.isExpanded" icon="angles-left"/>
    </button>
    <add-transaction-button/>
  </div>
</template>

<style scoped>
</style>