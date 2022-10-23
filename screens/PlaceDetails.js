import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

import OutlinedButton from '../components/UI/OutlinedButton';
import { NO_IMAGE_PREVIEW } from '../constants/variables';
import { fetchPlaceDetails } from '../utils/database';
import { Colors } from '../constants/colors';

const PlaceDetails = () => {
  const [fetchedPlace, setFetchedPlace] = useState();

  const route = useRoute();
  const navigation = useNavigation();

  function showOnMapHandler() {
    navigation.navigate('Map', {
      initialLat: fetchedPlace.location.latitude,
      initialLng: fetchedPlace.location.longitude,
    });
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({ title: place.title });
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: fetchedPlace.imageUri ? fetchedPlace.imageUri : NO_IMAGE_PREVIEW }}
      />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>
            {fetchedPlace.location.latitude} - {fetchedPlace.location.longitude}
          </Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
