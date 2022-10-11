import { useContext } from 'react';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import LayoutContainer from '../Components/LayoutContainer';

import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <LayoutContainer>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="Total:"
        fallbackText="No registered expenses found!"
      />
    </LayoutContainer>
  );
};

export default AllExpenses;
