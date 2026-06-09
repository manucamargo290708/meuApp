import React, { useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import calendario from '../data/Calendario';
import competicoes from '../data/Competicoes';

export default function ProximasCompeticoesScreen() {
  const [concluidos, setConcluidos] = useState({});

  const alternarConclusao = (id) => {
    setConcluidos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <LinearGradient colors={['#000','#aeaeae','#000']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Próximas Competições</Text>

        <View style={styles.imagemBox}>
          <Image
            source={{ uri: calendario[0]?.imagem }}
            style={styles.imagemCalendario}
          />
        </View>

        <Text style={styles.mes}>JUNHO</Text>

        {competicoes.filter((item) => item.mes === 'JUNHO').map((item) => {
          const concluido = !!concluidos[item.id];

          return (
            <View key={item.id} style={[styles.card, concluido && styles.cardConcluido]}>
              <Text style={styles.item}>{item.texto}</Text>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[styles.botao, concluido && styles.botaoConcluido]}
                onPress={() => alternarConclusao(item.id)}
              >
                <Text style={styles.botaoTexto}>{concluido ? 'Concluído' : 'Marcar como concluído'}</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        <Text style={styles.mes}>JULHO</Text>

        {competicoes.filter((item) => item.mes === 'JULHO').map((item) => {
          const concluido = !!concluidos[item.id];

          return (
            <View key={item.id} style={[styles.card, concluido && styles.cardConcluido]}>
              <Text style={styles.item}>{item.texto}</Text>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[styles.botao, concluido && styles.botaoConcluido]}
                onPress={() => alternarConclusao(item.id)}
              >
                <Text style={styles.botaoTexto}>{concluido ? 'Concluído' : 'Marcar como concluído'}</Text>
              </TouchableOpacity>
            </View>
          );
        })}

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  imagemBox:{
    alignItems:'center',
    marginBottom:18,
  },
  imagemCalendario:{
    width:'100%',
    height:490,
    borderRadius:14,
  },
  titulo:{
    color:'#d8b4ff',
    fontSize:28,
    textAlign:'center',
    marginBottom:20
  },
  mes:{
    color:'#d8b4ff',
    fontSize:18,
    marginTop:20,
    marginBottom:10
  },
  card:{
    backgroundColor:'rgba(255,255,255,0.12)',
    borderRadius:12,
    padding:9,
    marginBottom:2,
  },
  cardConcluido:{
    backgroundColor:'rgba(134, 239, 172, 0.14)',
    borderWidth:1,
    borderColor:'#bbf7d0',
  },
  item:{
    color:'#fff',
    fontSize:15,
    lineHeight:22,
  },
  botao:{
    marginTop:6,
    alignSelf:'flex-start',
    backgroundColor:'#56346d',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:8,
  },
  botaoConcluido:{
    backgroundColor:'#15803d',
  },
  botaoTexto:{
    color:'#fff',
    fontSize:12,
    fontWeight:'600',
  }
});