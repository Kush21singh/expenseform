import React, { useState } from 'react';
import '../Expense/ExpenseItems.css';
import ExpenseDate from '../Expense/ExpenseDate';
import ExpenseDetails from '../Expense/ExpenseDetails';

function ExpenseItem(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleted(true);
  };
  if (isDeleted) {
    return null; 
  }

  return (
    <div className={`expense-item ${isDeleted ? 'deleted' : ''}`}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      {!isDeleted && (
        <button onClick={handleDeleteClick}>Delete Expense</button>
      )}
    </div>
  );
}

export default ExpenseItem;
