import { StyleSheet, Text, View, FlatList } from 'react-native';

import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/colors';

const PlaceList = ({ places }) => {
  if (!places || !places.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      style={styles.list}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={() => {}} />}
    />
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
