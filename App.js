import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

//Guardar en una constante, el ancho del dispositivo
//const width = Dimensions.get('window').width

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator 
      size = "large"
      color = "#0000ff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
