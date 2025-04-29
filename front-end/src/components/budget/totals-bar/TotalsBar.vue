<script setup>
import {useBudgetStore} from "@/stores/BudgetStore";
import BalanceCard from "@/components/budget/totals-bar/cards/BalanceCard.vue";
import ButtonsCard from "@/components/budget/totals-bar/cards/ButtonsCard.vue";
import CalendarCard from "@/components/budget/totals-bar/cards/CalendarCard.vue";

const store = useBudgetStore();
</script>

<template>
  <TransitionGroup name="fade" tag="div" class="flex flex-row h-min">
    <balance-card key="total"
                  class="card-left"
                  title="Total"
                  subtitle="Latest transactions :"
                  :balance="store.getTotal"
                  :latest="store.getLatestTransactions"/>
    <div v-show="store.isExpanded" key="balances" class="flex">
      <balance-card
          :title="store.getMonthName + ' expenses'"
          subtitle="Latest expenses :"
          :balance="store.getExpenses"
          :latest="store.getLatestExpenses"/>
      <balance-card
          :title="store.getMonthName + ' incomes'"
          subtitle="Latest incomes :"
          :balance="store.getIncome"
          :latest="store.getLatestIncomes"/>
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