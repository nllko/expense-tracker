import { required, maxLength, minValue, helpers } from "@vuelidate/validators";

const rules = {
  title: {
    required: helpers.withMessage("Title is required", required),
    maxLength: helpers.withMessage("Title should be less than 20 characters", maxLength(20))
  },
  amount: {
    required: helpers.withMessage("Amount is required", required),
    minValue: helpers.withMessage("Amount shoulde be more than 0", minValue(0.01))
  },
  date: {
    required: helpers.withMessage("Date is required", required),
  },
  category: {
    required: helpers.withMessage("Category is required", required),
  },
  notes: {
    maxLength: helpers.withMessage("Notes should be less than 100 characters", maxLength(100))
  }
};

export default rules;
