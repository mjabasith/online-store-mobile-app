import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image, ActivityIndicator  } from 'react-native';
import AppButton from '../Components/Button'

const LoginScreen = () => {
  return (
    <>
        <Text>Login Screen</Text>
        <AppButton  title={'Login'} />
    </>
  );
};

export default LoginScreen;