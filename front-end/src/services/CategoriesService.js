import api from "@/services/api";

export default {
  getCategories() {
    return api().get("/categories");
  },
};
