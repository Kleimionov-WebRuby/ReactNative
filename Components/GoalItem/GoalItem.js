import { View, Text } from 'react-native';

import { styles } from './styles';

const GoalItem = ({ item: { text } }) => (
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>{text}</Text>
  </View>
);

export default GoalItem;
