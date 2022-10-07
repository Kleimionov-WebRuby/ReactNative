import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.rootScreen}>
      <View>
        <Text>Hello Navigation</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {},
});
