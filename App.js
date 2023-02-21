
import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from "axios";

export default function App() {
  const [documento, setDocumento] = useState([]);

  useEffect(()=>{

        const options = {
          method: 'GET',
          url: 'http://192.168.0.120:80/sempre_conectado/index.php/documento/27/15',
          headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
          console.log(response.data);
          setDocumento(response.data.dados);
        }).catch(function (error) {
          console.error(error);
        });
  },[]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
      style={{width:'100%'}}
      data={documento}
      renderItem={({item})=>(<View><Text>{item.tx_documento}</Text></View>)}
      />
      <StatusBar style="auto" />
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
});
