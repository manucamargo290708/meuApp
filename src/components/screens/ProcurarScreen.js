import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import cursos from '../data/Procurar';

export default function ProcurarScreen() {
  const [busca, setBusca] = useState('');

  const cursosFiltrados = useMemo(() => {
    const texto = busca.toLowerCase();

    return cursos.filter((curso) =>
      curso.nome.toLowerCase().includes(texto) ||
      curso.categoria.toLowerCase().includes(texto) ||
      curso.descricao.toLowerCase().includes(texto)
    );
  }, [busca]);

  return (
    <LinearGradient colors={['#000', '#999', '#000']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Procurar cursos extras</Text>
        <Text style={styles.subtitulo}>
          Encontre o estilo ideal para sua jornada de dança.
        </Text>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Buscar curso"
            placeholderTextColor="#d8b4ff"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        <Text style={styles.resultado}>
          {cursosFiltrados.length} curso(s) encontrado(s)
        </Text>

        {cursosFiltrados.map((curso) => (
          <TouchableOpacity key={curso.id} activeOpacity={0.85} style={styles.card}>
            <Text style={styles.cardTitulo}>{curso.nome}</Text>
            <Text style={styles.cardCategoria}>{curso.categoria}</Text>
            <Text style={styles.cardTexto}>📅 {curso.horario}</Text>
            <Text style={styles.cardTexto}>👩‍🏫 {curso.professor}</Text>
            <Text style={styles.cardTexto}>💵 {curso.valor}</Text>
            <Text style={styles.cardTexto}>{curso.descricao}</Text>
          </TouchableOpacity>
        ))}

        {cursosFiltrados.length === 0 && (
          <View style={styles.vazio}>
            <Text style={styles.vazioTexto}>Nenhum curso encontrado.</Text>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    color: '#d8b4ff',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 6,
  },
  subtitulo: {
    color: '#efe5ff',
    textAlign: 'center',
    marginBottom: 18,
  },
  inputBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#d8b4ff',
    marginBottom: 10,
  },
  input: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
  },
  resultado: {
    color: '#d8b4ff',
    fontSize: 13,
    marginBottom: 12,
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.28)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(216,180,255,0.25)',
  },
  cardTitulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardCategoria: {
    color: '#d8b4ff',
    fontSize: 14,
    marginBottom: 6,
  },
  cardTexto: {
    color: '#eee',
    fontSize: 14,
    lineHeight: 20,
  },
  vazio: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  vazioTexto: {
    color: '#fff',
    fontSize: 15,
  },
});
