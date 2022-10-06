import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button/Button';

import Title from '../../Components/Title/Title';
import Colors from '../../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={[styles.screen, styles.centerContainer]}>
      <Title>- GAME OVER -</Title>
      <View style={styles.centerContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/success.png')} style={styles.image} />
        </View>
      </View>
      <Text style={styles.summuryText}>
        Your phone needes <Text style={styles.hightlight}>{props.roundsNumber}</Text> rounds to
        guess the number <Text style={styles.hightlight}>{props.userNumber}</Text>.
      </Text>

      <View style={styles.buttonContainer}>
        <Button color="#72063c" onPress={props.onStartNewGame}>
          Start New Game
        </Button>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 24,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: Colors.accent500,
    margin: 24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summuryText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.white,
    lineHeight: 28,
  },
  hightlight: {
    color: Colors.primary600,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 24,
  },
});
