import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '../UI/Button';
import ImagePicker from './ImagePicker';
import { Colors } from '../../constants/colors';

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const changeTitleHandler = enteredText => {
    setEnteredTitle(enteredText);
  };

  const savePlaceHandler = () => {};

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
      </View>
      <ImagePicker />
      {/* <LocationPicker onPickLocation={pickLocationHandler} /> */}
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    fontSize: 16,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 4,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
