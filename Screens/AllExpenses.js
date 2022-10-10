import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import LayoutContainer from '../Components/LayoutContainer';

import { DUMMY_EXPENSES } from '../data/dummy-data';

const AllExpenses = () => {
  const sortedExpenses = DUMMY_EXPENSES.sort((a, b) => b.date - a.date);

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
