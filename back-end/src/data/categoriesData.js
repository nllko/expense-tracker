const expenseCategories = [
  {
    name: "Housing",
    code: "housing",
    description:
      "Rent or mortgage payments, property taxes, utilities, home maintenance.",
    type: "expense",
  },
  {
    name: "Transportation",
    code: "transport",
    description:
      "Fuel, public transportation, car maintenance, insurance, parking.",
    type: "expense",
  },
  {
    name: "Groceries",
    code: "groceries",
    description: "Food and household items.",
    type: "expense",
  },
  {
    name: "Healthcare",
    code: "healthcare",
    description: "Health insurance, doctor's visits, medications.",
    type: "expense",
  },
  {
    name: "Utilities",
    code: "utilities",
    description: "Electricity, water, gas, internet, phone bills.",
    type: "expense",
  },
  {
    name: "Entertainment",
    code: "entertainment",
    description: "Dining out, movies, concerts, hobbies.",
    type: "expense",
  },
  {
    name: "Debt Payments",
    code: "debt",
    description: "Credit card payments, loans, student loans.",
    type: "expense",
  },
  {
    name: "Education",
    code: "education",
    description: "Tuition, school supplies, educational courses.",
    type: "expense",
  },
  {
    name: "Personal Care",
    code: "care",
    description: "Haircuts, toiletries, cosmetics.",
    type: "expense",
  },
  {
    name: "Clothing",
    code: "clothing",
    description: "Clothing purchases.",
    type: "expense",
  },
  {
    name: "Savings",
    code: "savings",
    description: "Contributions to savings or retirement accounts.",
    type: "expense",
  },
  {
    name: "Charity/Donations",
    code: "charity",
    description: "Contributions to charitable organizations.",
    type: "expense",
  },
  {
    name: "Taxes",
    code: "taxes",
    description: "Income taxes, property taxes.",
    type: "expense",
  },
];

const incomeCategories = [
  {
    name: "Salary",
    code: "salary",
    description: "Regular employment income",
    type: "income",
  },
  {
    name: "Freelance/Contract Work",
    code: "freelance",
    description: "Income from freelance projects or contract work.",
    type: "income",
  },
  {
    name: "Business Income",
    code: "business",
    description: "Revenue from a business you own.",
    type: "income",
  },
  {
    name: "Investment Income",
    code: "investment",
    description: "Dividends, interest, capital gains.",
    type: "income",
  },
  {
    name: "Rental Income",
    code: "rental",
    description: "Income from renting out property.",
    type: "income",
  },
  {
    name: "Alimony/Child Support",
    code: "alimony",
    description: "Support payments received.",
    type: "income",
  },
  {
    name: "Gifts/Inheritance",
    code: "gifts",
    description: "Money received as gifts or inheritance.",
    type: "income",
  },
  {
    name: "Government Benefits",
    code: "government",
    description: "Social security, unemployment benefits.",
    type: "income",
  },
  {
    name: "Royalties",
    code: "royalties",
    description: "Income from intellectual property.",
    type: "income",
  },
  {
    name: "Side Hustles",
    code: "sidehustles",
    description: "Income from part-time or side businesses.",
    type: "income",
  },
  {
    name: "Other Income",
    code: "other",
    description: "Any other sources of income",
    type: "income",
  },
];

module.exports = { expenseCategories, incomeCategories };
