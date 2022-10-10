import { Text, Pressable, View } from 'react-native';

import Colors from '../../constants/colors';

import { styles } from './styles';

const Button = props => {
  const { onPress, color = Colors.black, children } = props;

  return (
    <View style={styles.buttonOutherContainer}>
      <Pressable
        android_ripple={{ color: Colors.black100 }}
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          { backgroundColor: color },
          pressed && styles.buttonInnerContainer,
        ]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
