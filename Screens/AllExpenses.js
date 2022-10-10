import { useContext } from 'react';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import LayoutContainer from '../Components/LayoutContainer';

import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const sortedExpenses = expensesCtx.expenses.sort((a, b) => b.date - a.date);

  return (
    <LayoutContainer>
      <ExpensesOutput
        expenses={sortedExpenses}
        expensesPeriod="Total:"
        fallbackText="No registered expenses found!"
      />
    </LayoutContainer>
  );
};

export default AllExpenses;
