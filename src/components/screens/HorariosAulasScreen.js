import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import horarios from '../data/Horarios';

export default function HorariosAulasScreen() {
  return (
    <LinearGradient colors={['#000','#999','#000']} style={styles.container}>
      <Text style={styles.titulo}>Horários das aulas</Text>

      <Text style={styles.modalidade}>Jazz</Text>

      {horarios.jazz.map((item,index)=>(
        <Text key={index} style={styles.item}>
          • {item.dia}: {item.horario}
        </Text>
      ))}

      <Text style={styles.modalidade}>Ballet</Text>

      {horarios.ballet.map((item,index)=>(
        <Text key={index} style={styles.item}>
          • {item.dia}: {item.horario}
        </Text>
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:25},
  titulo:{
    color:'#d8b4ff',
    fontSize:28,
    textAlign:'center',
    marginBottom:30
  },
  modalidade:{
    color:'#d8b4ff',
    fontSize:22,
    marginBottom:10,
    marginTop:20
  },
  item:{
    color:'#fff',
    marginBottom:10,
    fontSize:16
  }
});