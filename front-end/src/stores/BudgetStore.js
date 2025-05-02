import {defineStore} from 'pinia'
import TransactionsService from "@/services/TransactionsService";
import {computed, ref} from "vue";
import {getMonthPeriod} from "@/utils/dateUtils";

export const useBudgetStore = defineStore("budget", () => {
    const expanded = ref(false);
    const selectedDate = ref(null);
    const transactions = ref([]);
    const balances = ref({
        total: null,
        expenses: null,
        incomes: null
    });

    const latestTotal = computed(() => {
        return transactions.value.slice(0,5);
    });
    const latestExpenses = computed(() => {
        return transactions.value.filter(transaction => transaction.type === "EXPENSE").slice(0,5);
    });
    const latestIncomes = computed(() => {
        return transactions.value.filter(transaction => transaction.type === "INCOME").slice(0,5);
    });

    const toggleExpanded = () => {
        expanded.value = !expanded.value;
    };

    const fetchTransactions = async () => {
        if (selectedDate.value) {
            const {startDate, endDate} = getMonthPeriod(selectedDate.value);
            await TransactionsService.getTransactionsByPeriod(startDate, endDate).then((response) => {
                transactions.value = response.data;
            }).catch((error) => {
                console.error(error);
            });
        } else {
            await TransactionsService.getAllTransactions().then((response) => {
                transactions.value = response.data;
            }).catch((error) => {
                console.error(error);
            });
        }
    };

    const fetchBalances = async () => {
        if (selectedDate.value) {
            const {startDate, endDate} = getMonthPeriod(selectedDate.value);
            await TransactionsService.getBalanceByPeriod(startDate, endDate).then((response) => {
                balances.value.total = response.data.total;
                balances.value.expenses = response.data.expenses;
                balances.value.incomes = response.data.incomes;
            }).catch((error) => {
                console.error(error)
            });
        } else {
            await TransactionsService.getTotalBalance().then((response) => {
                balances.value.total = response.data.total;
                balances.value.expenses = response.data.expenses;
                balances.value.incomes = response.data.incomes;
            }).catch((error) => {
                console.error(error);
            });
        }
    };

    return {
        expanded,
        selectedDate,
        transactions,
        balances,
        latestTotal,
        latestExpenses,
        latestIncomes,
        toggleExpanded,
        fetchTransactions,
        fetchBalances,
    }
});