import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function EditarPerfilScreen() {
  return (
    <LinearGradient colors={['#000','#999','#000']} style={styles.container}>
      <ScrollView>

        <Text style={styles.titulo}>
          Editar Perfil
        </Text>

        <View style={styles.card}>

          <Text style={styles.label}>Nome</Text>
            <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#412f51"
          />

          <Text style={styles.label}>Email</Text>
            <TextInput
            style={styles.input}
            placeholder="nome@gmail.com"
            placeholderTextColor="#412f51"
          />

          <Text style={styles.label}>Senha</Text>
            <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor="#412f51"
            secureTextEntry
          />

          <Text style={styles.label}>Telefone</Text>
            <TextInput
            style={styles.input}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#412f51"
            maxLength={14}
          />

          <Text style={styles.label}>CPF</Text>
            <TextInput
            style={styles.input}
            placeholder="000.000.000-00"
            placeholderTextColor="#412f51"
            maxLength={14}
          />

        </View>
        <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={() => Alert.alert('Sucesso', 'Alterações salvas!')}
        >
        <Text style={styles.textoBotao}>
            Salvar Edições
        </Text>
        </TouchableOpacity>
        

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
    padding:20,
    borderRadius:15
  },
  label:{
    color:'#d8b4ff',
    marginBottom:5,
    marginTop:10
  },
  input:{
    backgroundColor:'#d8c6ea',
    borderRadius:10,
    padding:12
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
}
});