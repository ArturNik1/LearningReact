import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        { 
        // we can write like this or like this: filteredExpenses.length === 0 ? <p></p> : .... as well.
        //{filteredExpenses.length === 0 && <p>No expenses found.</p>}
        //{filteredExpenses.length > 0 && filteredExpenses.map....} 
        }
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items = {filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
