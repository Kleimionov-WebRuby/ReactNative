import { useNavigation } from '@react-navigation/native';

import PlaceForm from '../components/Place/PlaceForm';
import { insertPlace } from '../utils/database';

const AddPlace = () => {
  const navigation = useNavigation();

  const createPlaceHandler = async place => {
    navigation.navigate('AllPlaces', { place });
    await insertPlace(place);
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
