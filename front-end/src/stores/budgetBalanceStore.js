import { createStore } from "vuex";
import BudgetService from "@/services/BudgetService";

const store = createStore({
  state: {
    latestTransactions: (
      await BudgetService.getLatestTransactions(null, new Date())
    ).data,
    latestExpenses: (
      await BudgetService.getLatestTransactions("expense", new Date())
    ).data,
    latestIncomes: (
      await BudgetService.getLatestTransactions("income", new Date())
    ).data,
  },
  mutations: {
    updateStore: async (state, date) => {
      state.latestTransactions = (
        await BudgetService.getLatestTransactions(null, date)
      ).data;
      state.latestExpenses = (
        await BudgetService.getLatestTransactions("expense", date)
      ).data;
      state.latestIncomes = (
        await BudgetService.getLatestTransactions("income", date)
      ).data;
    },
  },
  getters: {
    getTransactionsByType: (state) => (type) => {
      if (type === "expense") {
        return state.latestExpenses;
      }
      if (type === "income") {
        return state.latestIncomes;
      }
      return state.latestTransactions;
    },
  },
});

export default store;
