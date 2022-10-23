import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from 'expo-location';

import OutlinedButton from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';

const LocationPicker = ({ onPickLocation }) => {
  const [location, setLocation] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

  useEffect(() => {
    if (route.params) {
      setLocation(prev => ({
        ...prev,
        latitude: route.params.pickedLat,
        longitude: route.params.pickedLng,
      }));
    }
  }, [route]);

  useEffect(() => {
    onPickLocation(location);
  }, [location, onPickLocation]);

  const verifyPermissions = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED ||
      locationPermissionInformation.status === PermissionStatus.DENIED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const currentLocation = await getCurrentPositionAsync();
    setLocation(currentLocation.coords);
  };

  const pickOnMapHandler = () => {
    navigation.navigate('Map');
  };

  return (
    <View>
      <View style={styles.mapPreview}>
        {location ? (
          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.03,
            }}
          >
            <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
          </MapView>
        ) : (
          <Text>No location picked yet.</Text>
        )}
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
