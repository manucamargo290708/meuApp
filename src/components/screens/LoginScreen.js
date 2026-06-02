import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <LinearGradient
      colors={['#000', '#999', '#000']}
      style={styles.container}
    >
      <Text style={styles.titulo}>CORPO DE BAILE</Text>

      <Text style={styles.subtitulo}>
        da Secretaria da Cultura de Valinhos
      </Text>

      <View style={styles.card}>
        <Text style={styles.login}>Login</Text>

        <TextInput
          placeholder="email"
          placeholderTextColor="#666"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="senha"
          placeholderTextColor="#666"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.esqueceu}>
          Esqueceu a senha?
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.botaoTexto}>
            Login
          </Text>
        </TouchableOpacity>

        <Text style={styles.ou}>OU</Text>

        <TouchableOpacity style={styles.signup}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    color: '#d8b4ff',
    fontSize: 34,
    fontWeight: '300',
  },

  subtitulo: {
    color: '#d8b4ff',
    marginBottom: 40,
  },

  card: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 25,
    borderRadius: 15,
  },

  login: {
    color: '#d8b4ff',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#d9c6ea',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  esqueceu: {
    textAlign: 'center',
    color: '#d8b4ff',
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#d8b4ff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    fontSize: 18,
    color: '#4d2a63',
  },

  ou: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#fff',
  },

  signup: {
    backgroundColor: '#d8b4ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});