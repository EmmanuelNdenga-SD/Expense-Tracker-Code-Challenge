import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <div className="expense-table">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;