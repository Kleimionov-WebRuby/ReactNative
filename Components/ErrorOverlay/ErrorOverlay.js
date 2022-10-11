import { View, StyleSheet, Text, Image } from 'react-native';

import Colors from '../../constants/colors';
import Button from '../Button';

const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/error.png')} style={styles.image} />
      </View>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      {onConfirm && <Button onPress={onConfirm}>Okay</Button>}
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.primary700,
  },
  imageContainer: {
    width: 120,
    height: 120,
    marginBottom: 16,
    marginTop: -24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
