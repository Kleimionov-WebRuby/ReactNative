import { StyleSheet, View, TextInput } from 'react-native';

import Button from '../../Components/Button/Button';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContinue}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" />
      <View style={styles.buttonsGroup}>
        <View style={styles.buttonContainer}>
          <Button color="#72063c">Reset</Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button color="#72063c">Confirm</Button>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContinue: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#440223',
    elevation: 4, // Android only
    // --- IOS only ↓ ---
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // ------------------
    justifyContent: 'center',
    alignItems: 'center',
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    color: '#ddb52f',
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
