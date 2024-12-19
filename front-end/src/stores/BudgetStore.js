import {defineStore} from 'pinia'
import TransactionsService from "@/services/TransactionsService";

export const useBudgetStore = defineStore('budget', {
    state: () => ({
        transactions: [],
        total: null,
        expenses: null,
        income: null,
    }),
    getters: {
        allTransactions(state) {
            return state.transactions.data
        },
        getTotal(state) {
            return state.total;
        },
        getExpenses(state) {
            return state.expenses;
        },
        getIncome(state) {
            return state.income;
        }
    },
    actions: {
        async init() {
            await this.initTransactions();
            await this.initMonthlySummary();
        },
        async initTransactions() {
            await TransactionsService.getTransactions().then(response => {
                this.transactions = response.data.transactions;
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