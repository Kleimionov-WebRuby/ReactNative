import { useNavigation } from '@react-navigation/native';

import PlaceForm from '../components/Place/PlaceForm';
import { insertPlace } from '../utils/database';

const AddPlace = () => {
  const navigation = useNavigation();

  const createPlaceHandler = async place => {
    await insertPlace(place);
    navigation.navigate('AllPlaces');
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
