import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // for multiple states 
        setEnteredTitle(event.target.value); 
        
        // Don't do this when the state depends on the prevState. -> sync issue
        // for single state
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // correct way for single state.
        // setUserInput( (prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value); 
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value); 
    }

    const sumbitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit = {sumbitHandler}>
            <div className = "new-expense__controls">
                <div className= "new-expense__control">
                    <label>Title</label> 
                    <input type = "text" value = {enteredTitle} onChange = {titleChangeHandler} />
                </div>
                <div className= "new-expense__control">
                    <label>Amount</label> 
                    <input type = "text" value = {enteredAmount} onChange = {amountChangeHandler} />
                </div>
                <div className= "new-expense__control">
                    <label>Date</label> 
                    <input type = "date" value = {enteredDate} min = "2019-01-01" max = "2022-07-08" onChange = {dateChangeHandler} />
                </div>
            </div>
            <div className= "new-expense__actions">
                <button onClick = {props.onCancel} type = "button">Cancel</button>
                <button type = "sumbit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;