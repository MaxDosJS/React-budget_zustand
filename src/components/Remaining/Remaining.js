import React from "react";
import useBudgetStore from "../../zustand/zustand";

const RemainingBudget = () => {
  const expenses = useBudgetStore((state) => state.expenses);
  const budget = useBudgetStore((state) => state.budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>Remaining: ₸{budget - totalExpenses}</span>
    </div>
  );
};

export default RemainingBudget;
