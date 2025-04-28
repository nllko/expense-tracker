import {defineStore} from 'pinia'
import TransactionsService from "@/services/TransactionsService";

export const useBudgetStore = defineStore('budget', {
    state: () => ({
        expanded: false,
        total: {
            balance: null,
            transactions: []
        },
        selected: {
            expenses: null,
            income: null,
            transactions: [],
        },
        selectedDate: new Date(),
    }),
    getters: {
        isExpanded(state) {
            return state.expanded
        },
        getTransactions(state) {
            return state.transactions
        },
        getTotal(state) {
            return state.total.balance;
        },
        getExpenses(state) {
            return state.selected.expenses;
        },
        getIncome(state) {
            return state.selected.income;
        },
        getLatestTransactions(state) {
            return sortTransactions(state.total.transactions);
        },
        getLatestExpenses(state) {
            const filteredTransactions = state.selected.transactions.filter(transaction => transaction.type === "EXPENSE");
            return sortTransactions(filteredTransactions);
        },
        getLatestIncomes(state) {
            const filteredTransactions = state.selected.transactions.filter(transaction => transaction.type === "INCOME");
            return sortTransactions(filteredTransactions);
        }
    },
    actions: {
        toggleExpanded() {
            this.expanded = !this.expanded;
        },
        async init() {
            await this.initTotalTransactions();
            await this.initSelectedTransactions();
            await this.initTotalBalance();
            await this.initSelectedBalance();
        },
        async initTotalTransactions() {
            await TransactionsService.getAllTransactions().then(response => {
                this.total.transactions = response.data;
            }).catch(error => {
                console.error(error);
            });
        },
        async initSelectedTransactions() {
            const {firstDayOfMonth, lastDayOfMonth} = getPeriod(this.selectedDate);
            await TransactionsService.getTransactionsByPeriod(firstDayOfMonth, lastDayOfMonth).then(response => {
                this.selected.transactions = response.data;
            }).catch(error => {
                console.error(error);
            });
        },
        async initTotalBalance() {
            await TransactionsService.getTotalBalance().then(response => {
                this.total.balance = response.data.balance;
            }).catch((error) => {
                console.error(error);
            })
        },
        async initSelectedBalance() {
            const {firstDayOfMonth, lastDayOfMonth} = getPeriod(this.selectedDate);
            await TransactionsService.getBalanceByPeriod(firstDayOfMonth, lastDayOfMonth).then((response) => {
                this.selected.expenses = response.data.expenses;
                this.selected.income = response.data.income;
            }).catch((error) => {
                console.error(error);
            })
        },
        async saveTransaction(transaction) {
            await TransactionsService.saveTransaction(transaction).then(() => {
                this.init();
            }).catch((error) => {
                console.error(error);
            })
        }
    }
})

const sortTransactions = (transactions) => {
  const sortedTransactions = transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return sortedTransactions.slice(0, 3);
};

const getPeriod = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return {firstDayOfMonth: firstDay, lastDayOfMonth: lastDay}
}