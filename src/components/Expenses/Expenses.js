import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [Year, setYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter selected={Year} onChangeFilters={filterChangeHandler} />
        {props.items.map((expense, index) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
    </div>
  );
}

export default Expenses;
