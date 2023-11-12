import create from "zustand";
import { v4 as uuidv4 } from "uuid";

const useBudgetStore = create((set) => ({
  budget: 2000,
  expenses: [
    { id: uuidv4(), name: "Shopping", cost: 50 },
    { id: uuidv4(), name: "Holiday", cost: 300 },
    { id: uuidv4(), name: "Transportation", cost: 70 },
    { id: uuidv4(), name: "Fuel", cost: 40 },
    { id: uuidv4(), name: "Child Care", cost: 500 },
  ],
  addExpense: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),
  deleteExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
  setBudget: (budget) => set({ budget }),
}));

export default useBudgetStore;
