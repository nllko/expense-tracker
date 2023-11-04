import { createStore } from "vuex";
import BudgetService from "@/services/BudgetService";

const store = createStore({
  state: {
    latestTransactions: (await BudgetService.getLatestTransactions(null, new Date())).data,
    latestExpenses: (await BudgetService.getLatestTransactions("expense", new Date())).data,
    latestIncomes: (await BudgetService.getLatestTransactions("income", new Date())).data,
    totalExpense: (await BudgetService.getBalance("expense", new Date())).data.balance,
    totalIncome: (await BudgetService.getBalance("income", new Date())).data.balance,
  },
  mutations: {
    updateStore: async (state, date) => {
      state.latestTransactions = (await BudgetService.getLatestTransactions(null, date)).data;
      state.latestExpenses = (await BudgetService.getLatestTransactions("expense", date)).data;
      state.latestIncomes = (await BudgetService.getLatestTransactions("income", date)).data;
      state.totalExpense = (await BudgetService.getBalance("expense", date)).data.balance;
      state.totalIncome = (await BudgetService.getBalance("income", date)).data.balance;
    },
    toggleTotalBalances: async (state, date) => {
      state.totalExpense = (await BudgetService.getBalance("expense", date)).data.balance;
      state.totalIncome = (await BudgetService.getBalance("income", date)).data.balance;
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
    getBalanceByType: (state) => (type) => {
      if (type === "expense") {
        return state.totalExpense;
      }
      if (type === "income") {
        return state.totalIncome;
      }
      return state.totalIncome - state.totalExpense;
    },
  },
});

export default store;
