import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import LayoutContainer from '../Components/LayoutContainer';
import IconButton from '../Components/IconButton';
import Button from '../Components/Button';
import { DUMMY_EXPENSES } from '../data/dummy-data';
import Colors from '../constants/colors';

const ManageExpense = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    const selectedExpense = DUMMY_EXPENSES.find(expense => expense.id === expenseId);
    navigation.setOptions({ title: selectedExpense ? selectedExpense.description : 'Add Expense' });
  }, [expenseId, navigation]);

  const deleteExpenseHandler = () => {
    // Action for delete
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    // Action for create
    navigation.goBack();
  };

  return (
    <LayoutContainer>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button style={styles.button} mode="flat" onPress={cancelHandler}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={confirmHandler}>
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </View>
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
    padding: 24,
    backgroundColor: Colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: 'center',
  },
});
