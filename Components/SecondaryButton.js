import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';

  const SecondaryButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {    
      elevation: 4,
      backgroundColor: "white",
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal: 12,
      margin: 20

    },
    appButtonText: {
      fontSize: 18,
      color: "#5DB075",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });
  
  export default SecondaryButton;