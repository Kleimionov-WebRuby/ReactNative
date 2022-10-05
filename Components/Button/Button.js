import React from 'react';
import { Text, Pressable, View } from 'react-native';

import { styles } from './styles';

const Button = props => {
  const { onPress, color = '#000000', children } = props;

  return (
    <View style={styles.buttonOutherContainer}>
      <Pressable
        android_ripple={{ color: 'rgba(239, 242, 243, 0.1)' }}
        style={({ pressed }) => [
          { backgroundColor: color },
          styles.buttonInnerContainer,
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
