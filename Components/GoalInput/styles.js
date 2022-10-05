import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  goalImage: {
    width: 160,
    height: 160,
    margin: 12,
    marginTop: -140,
  },

  textInput: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    paddingHorizontal: 18,
    marginRight: 8,
  },

  buttonGroup: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 16,
  },
});
