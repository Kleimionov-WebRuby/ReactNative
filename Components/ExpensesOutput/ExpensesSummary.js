import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginBottom: 6,
    borderRadius: 6,
    backgroundColor: Colors.primary50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: Colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
});
