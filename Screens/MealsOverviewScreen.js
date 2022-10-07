import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../Components/MealItem';

const MealsOverviewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    // Dynamic set navigation option like dynamic screen title
    const catTitle = CATEGORIES.find(category => category.id === catId).title;
    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const renderMealItem = ({ item }) => {
    return <MealItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={({ id }) => id} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsOverviewScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
