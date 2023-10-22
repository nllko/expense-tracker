import api from '@/services/api'

export default {
    saveTransaction (data) {
        return api().post('budget/transaction/add', data);
    },
    getLatestTransactions () {
        return api().get('budget/transactions/latest');
    },
    getLatestExpenses () {
        return api().get('budget/transactions/latestExpenses');
    },
    getLatestIncomes () {
        return api().get('budget/transactions/latestIncomes');
    }
}
