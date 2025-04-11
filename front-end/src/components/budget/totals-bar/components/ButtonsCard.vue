<script setup>
import {useBudgetStore} from "@/stores/BudgetStore";
import AddTransaction from "@/components/budget/add-transaction/AddTransaction.vue";

const store = useBudgetStore();
</script>

<template>
  <div class="card flex flex-col p-2">
    <button class="button" :class="store.isExpanded ? 'move-left' : 'move-right'" @click="store.toggleExpanded()">
      <fa-icon v-if="!store.isExpanded" icon="angles-right"/>
      <fa-icon v-if="store.isExpanded" icon="angles-left"/>
    </button>
    <add-transaction/>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--mantle);
  font-size: 1.5rem;
}

.button {
  color: var(--green);
  transition: transform 0.2s ease-out;

  &:hover {
    color: var(--light-green);
  }
}

.move-right:hover {
  transform: translateX(0.5rem);
}

.move-left:hover {
  transform: translateX(-0.5rem);
}
</style>