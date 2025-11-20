
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AIScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI — Kushina / Teacher (placeholder)</Text>
      <Text style={styles.hint}>This is a placeholder screen from the PRD scaffold.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 8
  },
  hint: {
    color: '#bbb',
    textAlign: 'center'
  }
});
