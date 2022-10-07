import { useNavigation } from '@react-navigation/native';
import { View, Pressable, Text, Image, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/colors';
import { RootPath } from '../../constants/rootPath';

function MealItem({ item: { id, title, imageUrl, duration, complexity, affordability } }) {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate(RootPath.MealDetail, { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
        android_ripple={{ color: Colors.gray200 }}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 16,
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
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
