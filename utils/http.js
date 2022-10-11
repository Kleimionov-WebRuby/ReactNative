import axios from 'axios';

const URL = 'https://react-native-cours-f5bc4-default-rtdb.firebaseio.com';

export const storeExpene = async expenseData => {
  const response = await axios.post(`${URL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
};
