import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div style={{ 
      backgroundImage: `url("./components/green_circle.png")` 
    }}></div>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }   

{
                            //Currency component
                            <div className='col-sm'>
                                <Currency />
                            </div>
                        }      
                       
                        {
                            /* Add ExpenseList component here */
                            //ExpenseList component
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                            //ExpenseItem component
                            <div className='col-sm'>
                                <ExpenseItem />
                            </div>
                        }        

                        <h2 className='mt-3'>Change Allocation</h2>

                        {
                            /* Add AllocationForm component here under */
                            //AllocationForm component
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
