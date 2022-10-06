import { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import Title from '../../Components/Title/Title';
import Colors from '../../constants/colors';
import NumberContainer from './components/NumberContainer';
import GuessNumberItem from '../../Components/GuessNumberItem/GuessNumberItem';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
  const initialGuess = useMemo(
    // Use useMemo to prevent error with max call stack size.
    () => generateRandomBetween(minBoundary, maxBoundary, props.userNumber),
    [],
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);

  const nextGuessNumdler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userNumber) ||
      (direction === 'greater' && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'destructive' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prev => [newRndNumber, ...prev]);
  };

  return (
    <View style={styles.screen}>
      <Card>
        <Title>- Opponent's Guess -</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text style={styles.subtitle}>Higher or lower?</Text>

          <View style={styles.buttonsGroup}>
            <View style={styles.buttonContainer}>
              <Button color="#72063c" onPress={nextGuessNumdler.bind(this, 'lower')}>
                <AntDesign name="minuscircleo" size={20} color="white" />
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button color="#72063c" onPress={nextGuessNumdler.bind(this, 'greater')}>
                <AntDesign name="pluscircleo" size={20} color="white" />
              </Button>
            </View>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ index, item }) => (
            <GuessNumberItem roundNumber={guessRounds.length - index} guessNumber={item} />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 100,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.white,
  },
  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
