import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import AllExpenses from './Screens/AllExpenses';
import ManageExpense from './Screens/ManageExpense';
import RecentExpenses from './Screens/RecentExpenses';
import IconButton from './Components/IconButton/IconButton';
import ExpensesContextProvider from './store/expenses-context';
import { RootPath } from './constants/rootPath';
import Colors from './constants/colors';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  const navigation = useNavigation();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.white,
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarActiveTintColor: Colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate(RootPath.ManageExpense);
            }}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name={RootPath.RecentExpenses}
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <AntDesign name="hourglass" color={color} size={size} />,
        }}
      />
      <BottomTabs.Screen
        name={RootPath.AllExpenses}
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => <AntDesign name="calendar" color={color} size={size} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: Colors.white,
            }}
          >
            <Stack.Screen
              name={RootPath.ExpensesOverview}
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name={RootPath.ManageExpense} component={ManageExpense} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
