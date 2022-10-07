import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './Screens/CategoriesScreen';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';
import MealDetailScreen from './Screens/MealDetailScreen';
import { RootPath } from './constants/rootPath';
import Colors from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.rootScreen}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.black },
              headerTintColor: Colors.white,
            }}
          >
            <Stack.Screen
              name={RootPath.MealsCategories}
              component={CategoriesScreen}
              options={{
                title: 'All Categories',
              }}
            />
            <Stack.Screen
              name={RootPath.MealsOverview}
              component={MealsOverviewScreen}
              options={{ title: 'Meals' }}
            />
            <Stack.Screen name={RootPath.MealDetail} component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {},
});
