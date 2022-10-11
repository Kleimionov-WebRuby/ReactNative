import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import LayoutContainer from '../Components/LayoutContainer';
import IconButton from '../Components/IconButton';
import { ExpensesContext } from '../store/expenses-context';
import { DUMMY_EXPENSES } from '../data/dummy-data';
import Colors from '../constants/colors';
import ExpenseForm from '../Components/ManageExpense/ExpenseForm';
import { storeExpene } from '../utils/http';

const ManageExpense = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const expensesCtx = useContext(ExpensesContext);

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const selectedExpense = expensesCtx.expenses.find(expense => expense.id === expenseId);

  useLayoutEffect(() => {
    const selectedExpense = DUMMY_EXPENSES.find(expense => expense.id === expenseId);
    navigation.setOptions({ title: selectedExpense ? selectedExpense.description : 'Add Expense' });
  }, [expenseId, navigation]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(expenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async expenseData => {
    if (isEditing) {
      expensesCtx.updateExpense(expenseId, expenseData);
    } else {
      const id = await storeExpene(expenseData);
      expensesCtx.addExpense({ ...expenseData, id });
    }

    navigation.goBack();
  };

  return (
    <LayoutContainer>
      <View style={styles.container}>
        <ExpenseForm
          defaultValues={selectedExpense}
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
        />

        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash"
              color={Colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    </LayoutContainer>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: 'center',
  },
});
