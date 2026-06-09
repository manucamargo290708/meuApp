import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ensaios from '../data/Ensaios';


export default function EnsaiosExtrasScreen() {
  const [concluidos, setConcluidos] = useState({});

  const alternarConclusao = (id) => {
    setConcluidos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <LinearGradient colors={['#000', '#999', '#000']} style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Ensaios Extras</Text>



        {ensaios.map(item => {
          const concluido = !!concluidos[item.id];

          return (
            <View key={item.id} style={[styles.card, concluido && styles.cardConcluido]}>
              <Text style={styles.data}>{item.data}</Text>
              <Text style={styles.texto}>{item.descricao}</Text>
              <Text style={styles.texto}>{item.horario}</Text>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.botao, concluido && styles.botaoConcluido]}
                onPress={() => alternarConclusao(item.id)}
              >
                <Text style={styles.botaoTexto}>
                  {concluido ? 'Concluído' : 'Marcar como concluído'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
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
  cardConcluido:{
    backgroundColor:'rgba(120, 255, 180, 0.14)',
    borderWidth:1,
    borderColor:'#a7f3d0',
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
},
  botao:{
    marginTop:10,
    alignSelf:'flex-start',
    backgroundColor:'#56346d',
    paddingHorizontal:12,
    paddingVertical:8,
    borderRadius:10,
  },
  botaoConcluido:{
    backgroundColor:'#15803d',
  },
  botaoTexto:{
    color:'#fff',
    fontSize:14,
    fontWeight:'600',
  }
});