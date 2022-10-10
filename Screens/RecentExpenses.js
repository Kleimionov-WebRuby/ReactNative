import { useContext } from 'react';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import LayoutContainer from '../Components/LayoutContainer';

import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  const sortedExpenses = recentExpenses.sort((a, b) => b.date - a.date);

  return (
    <LayoutContainer>
      <ExpensesOutput
        expenses={sortedExpenses}
        expensesPeriod="Last 7 days:"
        fallbackText="No registered expenses found!"
      />
    </LayoutContainer>
  );
};

export default RecentExpenses;
