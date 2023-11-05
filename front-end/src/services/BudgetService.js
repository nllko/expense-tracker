import api from "@/services/api";

export default {
  saveTransaction(data) {
    return api().post("budget/transaction/add", data);
  },
  getTransactions() {
    return api().get("budget/transactions");
  },

};
