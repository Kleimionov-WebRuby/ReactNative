import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonOutherContainer: {
    margin: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3, // Android only
    // --- IOS only ↓ ---
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // ------------------
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
