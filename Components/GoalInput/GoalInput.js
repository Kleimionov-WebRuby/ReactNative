import { useState } from 'react';
import { View, TextInput, Modal, Image } from 'react-native';

import Button from '../Button';

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
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.goalImage} source={require('../../assets/images/goal.png')} />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onSubmitEditing={handleAddGoal}
          onChangeText={handleInputChange}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title="Add Gaol" backgroundColor="#1E488F" onPress={handleAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" backgroundColor="#CF0234" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
