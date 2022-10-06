import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.primary600,
    elevation: 4, // Android only
    // --- IOS only ↓ ---
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // ------------------
  },
});
