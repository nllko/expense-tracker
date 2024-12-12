import {defineStore} from 'pinia'
import TransactionsService from "@/services/TransactionsService";

export const useTransactionsStore = defineStore('transactions', {
    state: () => ({
        transactions: [],
    }),
    getters: {
        allTransactions(state) {
            return state.transactions.data
        }
    },
    actions: {
        async initTransactions() {
            try {
                this.transactions = await TransactionsService.getTransactions();
            } catch (error) {
                console.error(error);
            }
        }
    }
})