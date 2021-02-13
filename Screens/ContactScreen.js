import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image, ActivityIndicator } from 'react-native';
import AppButton from '../Components/Button'

const ContactScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>SHOPZY</Text>
        
        <Text>Developed by:</Text>

        <View style={styles.nameTextContainer}>
            <Text style={styles.nameText}>Abdul Basith</Text>
            <Text style={styles.nameText}>Amoda Nilnuwan</Text>
            <Text style={styles.nameText}>Yasas Withana</Text>
        </View>

        <View style={styles.complaintContainer}>
            <Text>Facing any issues?</Text>
            <AppButton title={'Send Us A Complaint'}/>
        </View>    
    </ View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    titleText: {
        color: '#5db075',
        fontSize: 60,
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    nameTextContainer: {
        alignItems: 'center',
    },
    complaintContainer: {
        marginTop: 70,
        alignItems: 'center', 
    }
});

export default ContactScreen;