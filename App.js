import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import CategoriesScreen from './Screens/CategoriesScreen';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';
import MealDetailScreen from './Screens/MealDetailScreen';
import { RootPath } from './constants/rootPath';
import Colors from './constants/colors';
import FavoriteMealsScreen from './Screens/FavoriteMealsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation // IMPORTANT !!! - Don't work withoud this option
      screenOptions={{
        headerStyle: { backgroundColor: Colors.black },
        headerTintColor: Colors.white,
        drawerActiveTintColor: Colors.black,
        drawerActiveBackgroundColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name={RootPath.MealsCategories}
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          drawerIcon: ({ color, size }) => <Feather name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name={RootPath.FavoriteMeals}
        component={FavoriteMealsScreen}
        options={{
          title: 'Favorite',
          drawerIcon: ({ color, size }) => <Feather name="star" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

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
              name={RootPath.Drawer}
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
