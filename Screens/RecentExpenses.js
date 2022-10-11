import { useContext, useEffect, useState } from 'react';
import ErrorOverlay from '../Components/ErrorOverlay/ErrorOverlay';

import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import LayoutContainer from '../Components/LayoutContainer';
import LoadingOverlay from '../Components/LoadingOverlay';

import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      setError('');
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
