import api from "@/services/api";

export default {
    getTransactions() {
        return api().get("/transactions/all");
    },
    getMonthlySummary(year, month) {
        return api().get("/transactions/summary", {
            params: {
                year: year, month: month,
            }
        });
    }
};
