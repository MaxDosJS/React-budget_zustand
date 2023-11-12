import React from "react";
import useBudgetStore from "../../zustand/zustand";

const ExpenseTotal = () => {
  const expenses = useBudgetStore((state) => state.expenses);

  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary p-4">
      <span>Spent so far: ₸{total}</span>
    </div>
  );
};

export default ExpenseTotal;
