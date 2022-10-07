import { StyleSheet, Pressable, Text, View } from 'react-native';

import Colors from '../../constants/colors';

const CategoryGridTile = props => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: props.item.color },
          pressed && styles.buttonPressed,
        ]}
        android_ripple={{ color: Colors.black100 }}
        onPress={props.onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{props.item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

export const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    // --- IOS only ↓ ---
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    backgroundColor: Colors.white,
    // ------------------
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: Platform.OS === 'android' ? 1 : 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
