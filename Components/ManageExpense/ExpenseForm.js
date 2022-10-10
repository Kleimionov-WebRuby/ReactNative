import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../Button';
import Input from '../Input/Input';
import { getFormattedDate } from '../../utils/date';

function ExpenseForm({ defaultValues, onSubmit, onCancel }) {
  const [inputs, setInputs] = useState({
    amount: { value: defaultValues ? defaultValues.amount.toString() : '', isValid: true },
    date: { value: defaultValues ? getFormattedDate(defaultValues.date) : '', isValid: true },
    description: { value: defaultValues ? defaultValues.description : '', isValid: true },
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs(curInputs => ({
      ...curInputs,
      [inputIdentifier]: { value: enteredValue, isValid: true },
    }));
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs(curInputs => ({
        amount: { value: curInputs.amount.value, isValid: amountIsValid },
        date: { value: curInputs.date.value, isValid: dateIsValid },
        description: {
          value: curInputs.description.value,
          isValid: descriptionIsValid,
        },
      }));
      return;
    }

    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <Input
        label="Amount"
        keyboardType="decimal-pad"
        value={inputs.amount.value}
        isValid={inputs.amount.isValid}
        onChangeText={inputChangedHandler.bind(this, 'amount')}
      />
      <Input
        label="Date"
        placeholder="YYYY-MM-DD"
        value={inputs.date.value}
        isValid={inputs.date.isValid}
        maxLength={10}
        onChangeText={inputChangedHandler.bind(this, 'date')}
      />
      <Input
        label="Description"
        value={inputs.description.value}
        isValid={inputs.description.isValid}
        multiline
        autoCorrect={false}
        onChangeText={inputChangedHandler.bind(this, 'description')}
      />

      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {defaultValues ? 'Update' : 'Add'}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 12,
    textAlign: 'center',
  },
  buttons: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
