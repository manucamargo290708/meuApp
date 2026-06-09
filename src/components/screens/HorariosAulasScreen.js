import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import horarios from '../data/Horarios';
import calendario from '../data/Calendario';

export default function HorariosAulasScreen() {
  return (
    <LinearGradient colors={['#000','#999','#000']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Horários das aulas</Text>

        <View style={styles.imagemBox}>
          <Image
            source={{ uri: calendario[0]?.imagem }}
            style={styles.imagemCalendario}
          />
        </View>

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
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:25},
  imagemBox:{
    alignItems:'center',
    marginBottom:18,
  },
  imagemCalendario:{
    width:'100%',
    height:480,
    borderRadius:14,
  },
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