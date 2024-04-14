import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import greenBackground from "./green_circle_plus_transparent.png";
import redBackground from "./red_button_minus_transparent.png";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{backgroundImage: `url(${greenBackground})`, backgroundSize:"cover", backgroundColor: "rgba(0, 0, 0, 0)", border: "0px", width:"40px", height:"40px"}} onClick={event=> increaseAllocation(props.name)}></button></td>
        <td><button style={{backgroundImage: `url(${redBackground})`, backgroundSize:"cover", backgroundColor: "rgba(0, 0, 0, 0)", border: "0px", width:"40px", height:"40px"}} onClick={event=> decreaseAllocation(props.name)}></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;