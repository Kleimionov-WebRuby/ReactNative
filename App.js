import 'react-native-get-random-values';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
import Button from './Components/Button';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleEndAddGoal = () => {
    setIsVisible(false);
  };

  const handleAddGoal = enteredGoalText => {
    setGoals(prevState => [{ id: uuidv4(), text: enteredGoalText }, ...prevState]);
    handleEndAddGoal();
  };

  const handleDeleteGoal = id => {
    setGoals(prevState => prevState.filter(goal => goal.id !== id));
  };

  const handleStartAddGoal = () => {
    setIsVisible(true);
  };

  return (
    <View style={styles.appContainer}>
      <View>
        <Button title="Add New Goal" backgroundColor="#1E488F" onPress={handleStartAddGoal} />
      </View>
      <GoalInput isVisible={isVisible} onAddGoal={handleAddGoal} onCancel={handleEndAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={data => <GoalItem item={data.item} onDeleteGoal={handleDeleteGoal} />}
          keyExtractor={({ id }) => id}
        />
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
    marginTop: 12,
  },
});
