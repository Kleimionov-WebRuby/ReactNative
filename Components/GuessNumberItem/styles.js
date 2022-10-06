import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  guessContainer: {
    backgroundColor: Colors.accent500,
    marginVertical: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  guessText: {
    fontSize: 18,
  },
});
