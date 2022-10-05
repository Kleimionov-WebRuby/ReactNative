import 'react-native-get-random-values';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = enteredGoalText => {
    setGoals(prevState => [{ id: uuidv4(), text: enteredGoalText }, ...prevState]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput placeholder="Your Goal!" buttonTitle="Add Goal" onAddGoal={handleAddGoal} />
      <View style={styles.goalsContainer}>
        {goals.length ? (
          <FlatList data={goals} renderItem={GoalItem} keyExtractor={({ id }) => id} />
        ) : (
          <Text>List Of Goals...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6,
    paddingHorizontal: 12,
  },
});
