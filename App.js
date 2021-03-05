import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

//Guardar en una constante, el ancho del dispositivo
//const width = Dimensions.get('window').width

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  },[])
  if (loading){
    return <View style={styles.center}><Text>Cargando...</Text></View>
  }
  return (
    <View style={styles.container}>
      <FlatList
      data = {users}
      renderItem = {({item}) => <Text>{item.name}</Text>}
      keyExtractor = {item => String(item.id)}// Sirve para extraer la key de los elementos y los convierte en string
      ></FlatList>
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
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
