import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        let value = Number(event.target.value);

        if (value > 20000) {
            alert("Budget max value is 20000")
        }
        else if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
        }
        else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget:</span><br/>
<div style={{ whiteSpace: 'nowrap'}}>
    <label style={{ display: 'inline-block'}}>{currency}</label>
    <input type="number" step="10" value={newBudget} style={{ display: 'inline-block'}} onChange={handleBudgetChange}></input>
</div>
</div>
    );
};
export default Budget;