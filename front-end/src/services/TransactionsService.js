import api from "@/services/api";

const URL = "/transactions"

export default {
    getAllTransactions() {
        return api().get(URL + "/all")
    },
    getTransactionsByPeriod(startDate, endDate) {
        return api().get(URL, {
            params: {
                startDate: startDate, endDate: endDate,
            }
        });
    },
    saveTransaction(transaction) {
        return api().post(URL + "/save", transaction);
    },
    updateTransaction(transaction) {
      return api().put(URL + "/update", transaction);
    },
    deleteTransaction(id) {
        return api().delete(URL + `/delete/${id}`);
    },
    getBalanceByPeriod(startDate, endDate) {
        return api().get(URL + "/balance", {
            params: {
                startDate: startDate, endDate: endDate,
            }
        });
    },
    getTotalBalance() {
        return api().get(URL + "/balance/total");
    }
};
