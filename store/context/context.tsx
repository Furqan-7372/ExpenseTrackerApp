import {createContext, FC,  useEffect, useState} from 'react';
import {
  IExpenseContextProvider,
  IExpenseDetails,
} from '../../src/constants/interfaces/interfaces';
import { deleteExpense, fetchExpenses, storeExpense, updateExpenses
 } from '../../src/https';

export const ExpenseContext = createContext({
  expenses: [{}],
  addExpense: (expenseDetails: IExpenseDetails) => {},
  updateExpense: (id: number) => {},
  removeExpense: (id: number) => {},
});

const ExpenseContextProvider: React.FC<IExpenseContextProvider> = ({
  children,
}) => {
  const [expenseItem, setExpenseItem] = useState<IExpenseDetails[]>([]);
  useEffect(()=>{
    async function getExpenses() {
      const expenses = await fetchExpenses()
      
      setExpenseItem(expenses)
    }
    
    getExpenses()
  },[])
  
  // {
  //   id: Math.random(),
  //   name: 'Shoes',
  //   date: '05-11-2020',
  //   price: '100',
  // },
  // {
  //   id: Math.random(),
  //   name: 'AirPods',
  //   date: '16-03-2013',
  //   price: '10',
  // },
  // {
  //   id: Math.random(),
  //   name: 'Watch',
  //   date: '26-02-2023',
  //   price: '50',
  // },

  function addExpense(expenseDetails: IExpenseDetails) {
    storeExpense(expenseDetails)    

    setExpenseItem((currentExpenseIds: IExpenseDetails[]) => {
      return [...currentExpenseIds, expenseDetails];
    });
  }

  async function updateExpense(expenseDetails: IExpenseDetails) {
    let expenseItem_Copy = [...expenseItem];
    
    const IndexMilgaya = expenseItem_Copy.findIndex(element => element.id == expenseDetails.id);
    expenseItem_Copy[IndexMilgaya] = expenseDetails;

    setExpenseItem(expenseItem_Copy);

    await updateExpenses(expenseDetails, expenseDetails.id)

  }

  async function removeExpense(id: string) {
    await deleteExpense(id)
    setExpenseItem(currentExpenseIds =>
      currentExpenseIds.filter(expenseId => expenseId?.id !== id),
    );
  }

  const value = {
    expenses: expenseItem,
    addExpense: addExpense,
    updateExpense: updateExpense,
    removeExpense: removeExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
