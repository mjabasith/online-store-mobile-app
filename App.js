import React from 'react';
import {
  StatusBar,
} from 'react-native';

import ContactScreen from './Screens/ContactScreen'
import DiscountsScreen from './Screens/DiscountsScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductList from "./Screens/ProductList";
import ProductDetail from "./Screens/ProductDetail";

import Store from "./Store"


const ProductStack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';

function ProductStackNavigator() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen 
      name="ProductList" 
      component={ProductList} 
      options={{headerShown: false}}
      />
      <ProductStack.Screen 
      name="ProductDetail" 
      component={ProductDetail} 
      options={{headerShown: false}}
      />
    </ProductStack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <>
    <StatusBar backgroundColor="#5DB075" barStyle="light-content" />
      <Store>
        <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Products') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'Discounts') {
                iconName = focused ? 'ios-pricetag' : 'ios-pricetag-outline';
              } else if (route.name === 'Contact Us') {
                iconName = focused ? 'ios-call' : 'ios-call-outline';
              }
  
              return <Ionicons name={iconName} size={30} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#5DB075',
            inactiveTintColor: 'gray',
            tabStyle: {
              height: 50,
            },
            labelStyle: {
              fontSize: 15,
              margin: 0,
              padding: 0,
            },
          }}
          >
            <Tab.Screen name="Products" component={ProductStackNavigator} />
            <Tab.Screen name="Discounts" component={DiscountsScreen} />
            <Tab.Screen name="Contact Us" component={ContactScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Store>
    </>
  );
};

export default App;
