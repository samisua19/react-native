import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';// Markers es para configurar los marcadores en el mapa
import Constants from 'expo-constants'; //Conocer que tipo de permisos tiene el usuario
import { useState } from 'react';


//Guardar en una constante, el ancho del dispositivo
//const width = Dimensions.get('window').width

export default function App() {
  const [locacion, setLocacion] = useState({})

  const buscaLocation = async () => {
    //Solicitar los permisos de geolocalizacion
    const {status} = await Location.requestPermissionsAsync()
    if(status !== 'granted'){
      return Alert.alert('No hay permisos')
    }
    //datos de geolocalizacion
    const location = await Location.getCurrentPositionAsync({})
    setLocacion(location)
  }

  useEffect(()=>{
    buscaLocation()
  })

  return (
    <View style={styles.container}>
      <MapView style = {styles.map}>

        {
        locacion.coords ? <Marker coordinate = {locacion.coords}
        title = "titulo"
        description = "descripcion del punto" /> : null
      } 
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
