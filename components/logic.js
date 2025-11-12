export const Logic = {
  addExpense(expenses, expense) {
    expenses.push(expense);
    return expenses;
  },
  removeExpense(expenses, index) {
    expenses.splice(index, 1);
    return expenses;
  }
};
