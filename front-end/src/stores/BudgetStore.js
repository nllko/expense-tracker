import { createStore } from "vuex";
import BudgetService from "@/services/BudgetService";

const store = createStore({
  state: {
    transactions: (await BudgetService.getTransactions()).data,
  },
  mutations: {
    updateStore: async (state) => {
      state.transactions = (await BudgetService.getTransactions()).data;
    }
  },
  getters: {
    getTransactions: (state) => {
      return state.transactions;
    },
    getLatestTransactionsByTypeAndDate: (state) => (filterType, selectedDate) => {
      const filteredTransactions = filterTransactionsByTypeAndDate(
        state.transactions,
        filterType,
        selectedDate
      );

      // Sort the filtered transactions by date in descending order, and then by creationDate
      const sortedTransactions = filteredTransactions.slice().sort((a, b) => {
        const dateA = new Date(a.date || a.creationDate);
        const dateB = new Date(b.date || b.creationDate);

        if (dateA > dateB) {
          return -1; // Date A is greater, so it comes first
        } else if (dateA < dateB) {
          return 1; // Date B is greater, so it comes first
        } else {
          // Dates are the same, now compare by creationDate
          const creationDateA = new Date(a.createdAt);
          const creationDateB = new Date(b.createdAt);

          if (creationDateA > creationDateB) {
            return -1; // CreationDate A is greater, so it comes first
          } else if (creationDateA < creationDateB) {
            return 1; // CreationDate B is greater, so it comes first
          } else {
            return 0; // Both dates and creationDates are the same
          }
        }
      });

      // Slice the first 3 transactions
      const latest3Transactions = sortedTransactions.slice(0, 3);

      return latest3Transactions;
    },
    getBalanceByTypeAndDate: (state) => (filterType, selectedDate) => {
      const filteredTransactions = filterTransactionsByTypeAndDate(
        state.transactions,
        filterType,
        selectedDate
      );

      const totalAmount = filteredTransactions.reduce((total, transaction) => total + transaction.amount, 0);

      return totalAmount;
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

function filterTransactionsByTypeAndDate(transactions, filterType, selectedDate) {
  // Filter by type, or show all if filterType is empty
  const filteredByType = filterType
    ? transactions.filter((transaction) => transaction.type === filterType)
    : transactions;

  // Filter by selectedDate year and month, or show all if selectedDate is null
  const filteredTransactions = selectedDate
    ? filteredByType.filter((transaction) => {
        const date = new Date(transaction.date);
        return (
          date.getFullYear() === selectedDate.getFullYear() &&
          date.getMonth() === selectedDate.getMonth()
        );
      })
    : filteredByType;

  return filteredTransactions;
}

export default store;
