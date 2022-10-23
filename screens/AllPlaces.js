import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import PlaceList from '../components/Place/PlaceList';
import { fetchPlaces } from '../utils/database';

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlaceList places={loadedPlaces} />;
};

export default AllPlaces;
