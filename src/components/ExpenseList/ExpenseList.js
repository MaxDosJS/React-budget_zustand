import React, { useState, useEffect } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import useBudgetStore from "../../zustand/zustand";

const ExpenseList = () => {
  const expenses = useBudgetStore((state) => state.expenses);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(searchResults);
  };

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul className="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
