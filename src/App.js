import React, { useState } from 'react';
import Header from './components/Header';
import AddExpense from './components/AddExpense';
import PerformanceMetrics from './components/PerformanceMetrics';
import ExpenseTable from './components/ExpenseTable';
import './styles/App.css';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      description: 'High Standard',
      category: 'Technology (Lv. only)',
      name: 'Total',
      amount: 100,
      date: '2015-6-10'
    },
    {
      description: 'High Standard',
      category: 'Smart Smart',
      name: 'within',
      amount: 2000,
      date: '2015-6-12'
    },
    {
      description: 'Key Smart',
      category: 'Active key input selection:',
      name: 'proposed',
      amount: 3000,
      date: '2015-6-16'
    },
    {
      description: 'Key Smart',
      category: 'Active key input selection:',
      name: 'growth',
      amount: 10400,
      date: '2015-6-07'
    }
  ]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <AddExpense onAddExpense={addExpense} />
        <PerformanceMetrics />
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
};

export default App;