import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import AllExpenses from './src/screens/AllExpenses';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecentExpenses from './src/screens/RecentExpenses';
import ExpenseContextProvider from './store/context/context';
import AddExpense from './src/components/AddExpense';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = (): JSX.Element => {
  const headerRightHandler = () => {
    return <AddExpense />;
  };

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: styles.bottomTabHeader,
        tabBarStyle: styles.bottomTabHeader,
        headerRight: () => {
          return headerRightHandler();
        },
      }}>
      <BottomTabs.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          // tabBarIcon: {() => {}}
          tabBarStyle: {position: 'absolute'},
        }}
      />
      <BottomTabs.Screen name="Recent Expenses" component={RecentExpenses} 
      options={{
        title: 'Recent Expenses',
      }}
      />
    </BottomTabs.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'default'} />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName=""
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} />
            <Stack.Screen name="RecentExpenses" component={RecentExpenses} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomTabHeader: {
    backgroundColor: 'red',
  },
});

export default App;
