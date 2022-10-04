import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { padding } from './snippets/style-snippets';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="You Goal!" style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List Of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    ...padding(48, 16),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textInput: {
    ...padding(0, 12),
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '74%',
    marginRight: 8,
  },
});
