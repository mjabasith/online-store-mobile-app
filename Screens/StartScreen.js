import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import AppButton from '../Components/Button'

const StartScreen: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Text style={styles.logoText}>SHOPZY</Text>
        <AppButton title="Login" size="sm" />
        <AppButton title="Sign Up" size="sm" />
        <AppButton title="Guest User" size="sm" /> 
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 50,
    fontWeight:'bold',
    color: '#5db075',
    padding:20,
  }
});

export default StartScreen;