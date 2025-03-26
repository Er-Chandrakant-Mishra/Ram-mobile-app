import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');  //comment this line after completed page remove commnet redirect to login page..
      // navigation.replace('Main'); 
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Ram_logo.jpg')} 
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to RAM Academy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a1b9a', // Purple background color
  },
  logo: {
    width: 150,  
    height: 150, 
    marginBottom: 20,
  },
  text: {
    color: '#fff', 
    fontSize: 24,  
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});

export default SplashScreen;
