import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ensaios from '../data/Ensaios';


export default function EnsaiosExtrasScreen() {
  return (
    <LinearGradient colors={['#000', '#999', '#000']} style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Ensaios Extras</Text>



        {ensaios.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.data}>{item.data}</Text>
            <Text style={styles.texto}>{item.descricao}</Text>
            <Text style={styles.texto}>{item.horario}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,
    padding:20
},
  titulo:{
    fontSize:28,
    color:'#d8b4ff',
    textAlign:'center',
    marginBottom:20
},
  card:{
    backgroundColor:'rgba(255,255,255,0.15)',
    padding:15,
    borderRadius:12,
    marginBottom:15
  },
  data:{
    color:'#d8b4ff',
    fontSize:20,
    fontWeight:'bold'
},
  texto:{
    color:'#fff',
    marginTop:5,
    fontSize:16
}
});