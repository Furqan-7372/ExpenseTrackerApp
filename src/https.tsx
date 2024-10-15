import axios from 'axios';

const BACKEND_URL = 'https://mfl-rn-927-eta-default-rtdb.firebaseio.com';

export const storeExpense = (expenseData: object) => {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
};

export async function fetchExpenses() {
    const response = await axios.get(BACKEND_URL + '/expenses.json');
    const  expenses = []

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            price: response.data[key].price,
            date: response.data[key].date,
            name: response.data[key].name
        }
        expenses.push(expenseObj)
    }
    return expenses
};

export const updateExpenses = (expenseData: object, id?: string) => {
    const {name, date, price} = {name : expenseData.name, date : expenseData.date, price : expenseData.price}
    axios.put(BACKEND_URL + `/expenses/${id}.json`, {name, date, price})
}
export const deleteExpense = (id: string) => {
    axios.delete(BACKEND_URL + `/expenses/${id}.json`)
}