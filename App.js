import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Camera} from 'expo-camera';


//Guardar en una constante, el ancho del dispositivo
//const width = Dimensions.get('window').width

export default function App() {
  const [permisos, setPermisos] = useState(null)
  const [tipo, setTipo] = useState(Camera.Constants.Type.back) // se asigna el tipo de camara, trasera o delantera

  const getPermisos = async () =>{
    const {status} = await Camera.requestPermissionsAsync()
    setPermisos(status == 'granted')//tiene permisos
    
  }

  useEffect(()=>{
    getPermisos()
  })

  if(permisos === null){
    return <View><Text>Esperando Permisos...</Text></View>
  }

  if(permisos === false){
    return <View><Text>No dieron permisos</Text></View>
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={tipo}>
        <Button title = "Voltaer" onPress = {()=> {
          const {front, back} = Camera.Constants.Type // tomar el tipo de camara que se ejecuta en estos momentos
          const nTipo = tipo === back ? front : back // condicional qu determina el tipo de camara al que va a cambiar
          setTipo(nTipo)}} />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    height: 500,
    width:500
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
