import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

const IconButton = props => {
  const { icon, size, color, onPress } = props;

  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;
