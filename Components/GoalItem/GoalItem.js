import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ec3b83' }}
        onPress={props.onDeleteGoal.bind(this, props.item.id)}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
