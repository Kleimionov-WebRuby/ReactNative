import { StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../constants/colors';

const Input = props => {
  const { label, isValid, style, ...rest } = props;
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, !isValid && styles.invalidLabel]}>{props.label}</Text>
      <TextInput
        style={[
          styles.input,
          props.multiline && styles.inputMultiline,
          !isValid && styles.invalidInput,
        ]}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: Colors.primary100,
  },
  input: {
    color: Colors.primary700,
    backgroundColor: Colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: Colors.error500,
  },
  invalidInput: {
    backgroundColor: Colors.error50,
  },
});
