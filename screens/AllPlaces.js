import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import PlaceList from '../components/Place/PlaceList';

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces(prev => [...prev, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlaceList places={loadedPlaces} />;
};

export default AllPlaces;
