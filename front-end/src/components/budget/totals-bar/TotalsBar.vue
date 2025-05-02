<script setup>
import BalanceCard from "@/components/budget/totals-bar/cards/BalanceCard.vue";
import ButtonsCard from "@/components/budget/totals-bar/cards/ButtonsCard.vue";
import CalendarCard from "@/components/budget/totals-bar/cards/CalendarCard.vue";
import {computed} from "vue";
import {getMonthName} from "@/utils/dateUtils";
import {useBudgetStore} from "@/stores/BudgetStore";

const budgetStore = useBudgetStore();

const monthName = computed(() => {
  return budgetStore.selectedDate ? getMonthName(budgetStore.selectedDate) : "Total";
});
</script>

<template>
  <TransitionGroup name="fade" tag="div" class="flex flex-row h-min">
    <balance-card key="total"
                  class="card-left"
                  :title="monthName + ' balance'"
                  subtitle="Latest transactions :"
                  :balance="budgetStore.balances.total"
                  :latest="budgetStore.latestTotal"/>
    <div v-show="budgetStore.expanded" key="balances" class="flex">
      <balance-card
          :title="monthName + ' expenses'"
          subtitle="Latest expenses :"
          :balance="budgetStore.balances.expenses"
          :latest="budgetStore.latestExpenses"/>
      <balance-card
          :title="monthName + ' incomes'"
          subtitle="Latest incomes :"
          :balance="budgetStore.balances.incomes"
          :latest="budgetStore.latestIncomes"/>
      <calendar-card key="calendar" class="max-w-48"/>
    </div>
    <buttons-card key="buttons" class="card-right"/>
  </TransitionGroup>
</template>

<style scoped>
.card-left {
  border-radius: 6px 0 0 6px;
}

.card-right {
  border-radius: 0 6px 6px 0;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleX(0.1) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>