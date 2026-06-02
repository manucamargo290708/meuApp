import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProximasCompeticoesScreen() {
  return (
    <LinearGradient colors={['#000','#999','#000']} style={styles.container}>
      <ScrollView>

        <Text style={styles.titulo}>
          Próximas Competições
        </Text>

        <Text style={styles.mes}>JUNHO</Text>

        <Text style={styles.item}>
          • 04 de junho: Campinas Dance Festival
        </Text>

        <Text style={styles.item}>
          • 25 e 26 de junho: Noite de Repertório
        </Text>

        <Text style={styles.item}>
          • 27 de junho: Gala Lili Rosseti
        </Text>

        <Text style={styles.mes}>JULHO</Text>

        <Text style={styles.item}>
          • 03 e 04 de julho: Bravos São Paulo
        </Text>

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
  mes:{
    color:'#d8b4ff',
    fontSize:22,
    marginTop:20,
    marginBottom:10
  },
  item:{
    color:'#fff',
    marginBottom:15,
    fontSize:16
  }
});