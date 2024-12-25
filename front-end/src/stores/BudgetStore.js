import {defineStore} from 'pinia'
import TransactionsService from "@/services/TransactionsService";

export const useBudgetStore = defineStore('budget', {
    state: () => ({
        expanded: false,
        transactions: [],
        total: null,
        expenses: null,
        income: null,
    }),
    getters: {
        isExpanded(state) {
            return state.expanded
        },
        getTransactions(state) {
            return state.transactions
        },
        getTotal(state) {
            return state.total;
        },
        getExpenses(state) {
            return state.expenses;
        },
        getIncome(state) {
            return state.income;
        },
        getLatestTransactions(state) {
            const sortedTransactions = state.transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
            return sortedTransactions.slice(0, 3);
        },
        getLatestExpenses(state) {
            const filteredTransactions = state.transactions.filter(transaction => transaction.type === "EXPENSE");
            const sortedTransactions = filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
            return sortedTransactions.slice(0, 3);
        },
        getLatestIncomes(state) {
            const filteredTransactions = state.transactions.filter(transaction => transaction.type === "INCOME");
            const sortedTransactions = filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
            return sortedTransactions.slice(0, 3);
        }
    },
    actions: {
        toggleExpanded() {
            this.expanded = !this.expanded;
        },
        async init() {
            await this.initTransactions();
            await this.initMonthlySummary();
        },
        async initTransactions() {
            await TransactionsService.getTransactions().then(response => {
                this.transactions = response.data;
            }).catch(error => {
                console.error(error);
            });
        },
        async initMonthlySummary() {
            const currentDate = new Date();
            await TransactionsService.getMonthlySummary(currentDate.getFullYear(), currentDate.getMonth() + 1).then((response) => {
                this.total = response.data.total;
                this.expenses = response.data.expenses;
                this.income = response.data.income;
            }).catch((error) => {
                console.error(error);
            })
        }
    }
})