import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import Title from '../../Components/Title/Title';
import Colors from '../../constants/colors';

const StartGameScreen = props => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { height } = useWindowDimensions();

  const numberInputHandler = value => setEnteredNumber(value);
  const resetInputHandler = () => setEnteredNumber('');

  const confirmInputHandler = () => {
    const chosenNumber = Number(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Value has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    props.onPickNumber(chosenNumber);
  };

  const marginTop = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      {/* ↓ Keyboard view on IOS devices with landscape orientation ↓ This helps to avoid blocking the view using the keyboard. */}
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Card>
            <Title>- Guess My Number -</Title>
            <View style={styles.inputContinue}>
              <TextInput
                maxLength={2}
                value={enteredNumber}
                keyboardType="number-pad"
                style={styles.numberInput}
                onChangeText={numberInputHandler}
              />
              <View style={styles.buttonsGroup}>
                <View style={styles.buttonContainer}>
                  <Button color={Colors.primary500} onPress={resetInputHandler}>
                    Reset
                  </Button>
                </View>
                <View style={styles.buttonContainer}>
                  <Button color={Colors.primary500} onPress={confirmInputHandler}>
                    Confirm
                  </Button>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginHorizontal: 24,
  },
  inputContinue: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  buttonContainer: {
    flex: 1,
  },
});
