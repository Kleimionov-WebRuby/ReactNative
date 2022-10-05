import React from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './styles';

const Button = props => {
  const { onPress, title = 'Save', backgroundColor = '#000000' } = props;

  return (
    <Pressable
      android_ripple={{ color: 'rgba(239, 242, 243, 0.1)' }}
      style={{ backgroundColor, ...styles.button }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
