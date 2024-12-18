import {defineStore} from 'pinia'
import TransactionsService from "@/services/TransactionsService";
import BalanceService from "@/services/BalanceService";

export const useBudgetStore = defineStore('budget', {
    state: () => ({
        transactions: [],
        balance: null,
        expenses: null,
        income: null,
    }),
    getters: {
        allTransactions(state) {
            return state.transactions.data
        },
        getBalance(state) {
            return state.balance;
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
            try {
                this.transactions = await TransactionsService.getTransactions();
                await BalanceService.getBalance(2024, 12).then((response) => {
                    this.balance = response.data.balance;
                    this.expenses = response.data.expenses;
                    this.income = response.data.income;
                })
            } catch (error) {
                console.error(error);
            }
        }
    }
})