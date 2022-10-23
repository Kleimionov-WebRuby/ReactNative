import { useNavigation } from '@react-navigation/native';

import PlaceForm from '../components/Place/PlaceForm';

const AddPlace = () => {
  const navigation = useNavigation();

  const createPlaceHandler = place => {
    navigation.navigate('AllPlaces', { place });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
