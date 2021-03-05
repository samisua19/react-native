import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';

//Guardar en una constante, el ancho del dispositivo
//const width = Dimensions.get('window').width
const crearDialogo = () => Alert.alert('Titulo','Subtitulo', [
  {
    text: 'Cancelar',
    onPress : () =>{},
    style: "cancel"
  },
  {
    text: 'Aceptar',
    onPress: () => console.log('btnpress')
  }
],
{
  cancelable: false
}
)
export default function App() {
  const [modal,setModal] = useState(false)
  return (
    <View style={styles.container}>
      <Button title = "Abrir dialogo" onPress = {crearDialogo}/>
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          