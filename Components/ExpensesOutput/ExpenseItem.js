import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';
import { RootPath } from '../../constants/rootPath';
import { getFormattedDate } from '../../utils/date';

const ExpensesItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate(RootPath.ManageExpense, { expenseId: id });
  }

  return (
    <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemDescription}>{description}</Text>
          <Text style={styles.itemDate}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.itemAmountContainer}>
          <Text style={styles.itemAmount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  itemContainer: {
    backgroundColor: Colors.primary500,
    marginVertical: 12,
    padding: 12,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  itemDescription: {
    fontSize: 16,
    color: Colors.primary50,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemDate: {
    color: Colors.primary50,
  },
  itemAmountContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
    backgroundColor: Colors.primary50,
  },
  itemAmount: {
    fontWeight: 'bold',
    color: Colors.primary500,
  },
});
