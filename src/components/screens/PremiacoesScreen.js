import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import premiacoes from '../data/Premiacoes';

export default function PremiacoesScreen() {
  return (
    <LinearGradient colors={['#000','#999','#000']} style={styles.container}>
      <ScrollView>

        <Text style={styles.titulo}>
          Premiações
        </Text>

        {premiacoes.map((item,index)=>(
          <View key={index} style={styles.card}>
            <Text style={styles.ano}>
              {item.ano}
            </Text>

            <Text style={styles.festival}>
              {item.festival}
            </Text>

            <Text style={styles.texto}>
              {item.descricao}
            </Text>
          </View>
        ))}

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  titulo:{
    color:'#d8b4ff',
    textAlign:'center',
    fontSize:28,
    marginBottom:20
  },
  card:{
    marginBottom:20,
    backgroundColor:'rgba(255,255,255,0.15)',
    padding:15,
    borderRadius:12
  },
  ano:{
    color:'#d8b4ff',
    fontSize:20,
    fontWeight:'bold'
  },
  festival:{
    color:'#fff',
    fontSize:18,
    marginVertical:5
  },
  texto:{
    color:'#ddd'
  }
});