import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

import { styles } from './styles';

const GoalInput = props => {
  const [enteredGoalText, setSnteredGoalText] = useState('');

  const handleInputChange = value => {
    setSnteredGoalText(value);
  };

  const handleAddGoal = () => {
    props.onAddGoal(enteredGoalText);
    setSnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        style={styles.textInput}
        placeholder={props.placeholder}
        onSubmitEditing={handleAddGoal}
        onChangeText={handleInputChange}
      />
      <Button title={props.buttonTitle} onPress={handleAddGoal} />
    </View>
  );
};

export default GoalInput;
