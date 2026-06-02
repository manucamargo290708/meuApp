import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CarrinhoScreen() {
  return (
    <LinearGradient colors={['#000','#999','#000']} style={styles.container}>

        
        <Text style={styles.titulo}>Seu carrinho</Text>

      <View style={styles.card}>
        
        <Text style={styles.nome}>
          Curso: Contemporâneo
        </Text>

        <Text style={styles.item}>
          Segunda, quarta e sexta-feira
        </Text>

        <Text style={styles.valor}>
          Valor: R$40,00
        </Text>
      </View>

        <View style={styles.botoesContainer}>
          <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={() => Alert.alert('Sucesso', 'Alterações salvas!')}
        >
            <Text style={styles.textoBotao}>
                Finalizar compra
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={() => Alert.alert('Sucesso', 'Alterações salvas!')}
        >
            <Text style={styles.textoBotao}>
                Cancelar compra
            </Text>
        </TouchableOpacity>

        </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  card:{
    width:'85%',
    backgroundColor:'rgba(255,255,255,0.15)',
    padding:20,
    borderRadius:15
  },
  titulo:{
    color:'#d8b4ff',
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },
  item:{
    color:'#fff',
    marginBottom:10,
    textAlign:'center',
    fontSize:17
  },
  nome:{
    color:'#fff',
    marginBottom:10,
    textAlign:'center',
    fontSize:25
  },
  valor:{
    color:'#461a69',
    marginBottom:10,
    textAlign:'center',
    fontSize:20
  },
  botaoSalvar: {
  backgroundColor: '#d8b4ff',
  padding: 15,
  borderRadius: 10,
  marginTop: 25,
  alignItems: 'center',
},

textoBotao: {
  color: '#4d2a63',
  fontSize: 16,
  fontWeight: 'bold',
},
botoesContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:'75%'
}
});