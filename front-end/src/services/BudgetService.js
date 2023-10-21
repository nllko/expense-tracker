import api from '@/services/api'

export default {
    saveIncome (data) {
        return api().post('budget/incomes/add', data)
    },
    saveExpense (data) {
        return api().post('budget/expenses/add', data)
    },
}
