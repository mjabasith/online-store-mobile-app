import React from "react";
import { View, StyleSheet, Text } from 'react-native';

const DiscountsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.warningText}>Sorry!</Text>
        <Text style={styles.secondarWarningText}>No discounts avaliable right now</Text>
    </ View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    warningText: {
        fontSize: 40,
        color: '#db2929'
    },
    secondarWarningText: {
        fontSize: 20,
    }
});

export default DiscountsScreen;