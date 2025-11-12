import { Storage } from '../components/storage.js';
import { UI } from '../components/ui.js';
import { Logic } from '../components/logic.js';

let expenses = Storage.getExpenses();

UI.renderForm(addExpense);
UI.renderList(expenses, removeExpense);
UI.renderChart(expenses);

function addExpense(expense) {
  expenses = Logic.addExpense(expenses, expense);
  Storage.saveExpenses(expenses);
  UI.renderList(expenses, removeExpense);
  UI.renderChart(expenses);
}

function removeExpense(index) {
  expenses = Logic.removeExpense(expenses, index);
  Storage.saveExpenses(expenses);
  UI.renderList(expenses, removeExpense);
  UI.renderChart(expenses);
}
