export const Storage = {
  getExpenses() {
    return JSON.parse(localStorage.getItem('expenses')) || [];
  },
  saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }
};
