import api from '@/services/api'

export default {
    saveTransaction (data) {
        return api().post('budget/transaction/add', data);
    },
    getLatestTransactionsByType (type) {
        return api().get('budget/transactions/latest', {params: {
            type: type
        }});
    },
}
