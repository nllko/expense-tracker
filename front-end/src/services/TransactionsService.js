import api from "@/services/api";

export default {
    getTransactions() {
        return api().get("/transactions");
    },
};
