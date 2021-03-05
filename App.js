import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Modal, Text, View, Button } from 'react-native';

//Guardar en una constante, el ancho del dispositivo
//const width = Dimensions.get('window').width

export default function App() {
  const [modal,setModal] = useState(false)
  return (
    <View style={styles.container}>
      <Modal
        animationType = "slide"
        transparent = {true}
        visible = {modal}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Modal</Text>
            <Button
            title="Cerrar modal"
            onPress ={()=>setModal(!modal)}
            />
          </View>
        </View>
      </Modal>
      <Button title="Abrir modal"
      onPress = {()=> setModal(!modal)}
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
  },
  content: {
    backgroundColor: '#fff'
  },
  center : {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          