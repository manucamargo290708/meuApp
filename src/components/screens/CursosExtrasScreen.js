import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import cursos from '../data/Cursos';

export default function CursosExtrasScreen() {
  return (
    <LinearGradient colors={['#000','#999','#000']} style={styles.container}>
      <ScrollView>

        <Text style={styles.titulo}>
          Cursos Extras
        </Text>

        {cursos.map(curso => (
          <View key={curso.id} style={styles.card}>

            <Text style={styles.nome}>
              {curso.nome}
            </Text>

            <Image
              source={{uri: curso.imagem}}
              style={styles.imagem}
            />
          

            <Text style={styles.texto}>
              {curso.horario}
            </Text>

            <Text style={styles.texto}>
              {curso.horas}
            </Text>

            <Text style={styles.valor}>
              {curso.valor}
            </Text>

            <TouchableOpacity style={styles.botao}>
              <Text>Adicionar ao carrinho</Text>
            </TouchableOpacity>

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
    fontSize:28,
    textAlign:'center',
    marginBottom:20
  },
  card:{
    backgroundColor:'rgba(255,255,255,0.15)',
    padding:15,
    borderRadius:12,
    marginBottom:20
  },
  nome:{
    color:'#d8b4ff',
    textAlign:'center',
    fontSize:25,
    marginBottom:10
  },
  imagem:{
    width:'100%',
    height:200,
    borderRadius:10
  },
  texto:{
    color:'#fff',
    marginTop:10,
    fontSize: 17,
    alignSelf:'center'
},
  valor:{
    color:'#d8b4ff',
    marginTop:10,
    fontSize:20,
    alignSelf:'center'
  },
  botao:{
    backgroundColor:'#d8b4ff',
    padding:12,
    borderRadius:10,
    marginTop:15,
    alignItems:'center'
  }
});