import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const GuessNumberItem = ({ roundNumber, guessNumber }) => {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guessText}>#{roundNumber}</Text>
      <Text style={styles.guessText}>Opponent's guess: {guessNumber}</Text>
    </View>
  );
};

export default GuessNumberItem;
