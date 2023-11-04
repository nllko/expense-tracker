import api from "@/services/api";

export default {
  saveTransaction(data) {
    return api().post("budget/transaction/add", data);
  },
  getLatestTransactions(type, date) {
    return api().get("budget/transactions/latest", {
      params: {
        type: type,
        date: date,
      },
    });
  },
  getBalance(type, date) {
    return api().get("budget/balance", {
      params: {
        type: type,
        date: date,
      },
    });
  },
};
