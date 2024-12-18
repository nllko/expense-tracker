import api from "@/services/api";

export default {
    getBalance(year, month) {
        return api().get("/balance/get", {
            params: {
                year: year,
                month: month,
            }
        });
    },
};
