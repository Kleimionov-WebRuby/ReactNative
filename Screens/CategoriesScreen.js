import { FlatList } from 'react-native';
import CategoryGridTile from '../Components/CategoryGridTile/CategoryGridTile';

import { RootPath } from '../constants/rootPath';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => {
    const onPressHandler = () => {
      navigation.navigate(RootPath.MealsOverview, { categoryId: item.id });
    };

    return <CategoryGridTile item={item} onPress={onPressHandler} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
