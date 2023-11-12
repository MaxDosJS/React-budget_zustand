import React from "react";
import { TiDelete } from "react-icons/ti";
import useBudgetStore from "../../zustand/zustand";

const ExpenseItem = (props) => {
  const deleteExpense = useBudgetStore((state) => state.deleteExpense);

  const handleDeleteExpense = () => {
    deleteExpense(props.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          ₸{props.cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
