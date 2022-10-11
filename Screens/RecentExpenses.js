import { useContext, useEffect } from 'react';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import LayoutContainer from '../Components/LayoutContainer';

import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <LayoutContainer>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 days:"
        fallbackText="No registered expenses found!"
      />
    </LayoutContainer>
  );
};

export default RecentExpenses;
