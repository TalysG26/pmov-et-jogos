import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.Paidetodos}>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Carrinho de Compras" 
          placeholderTextColor="#79DA76" 
        />
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.icons}>
        <Ionicons name="cart" size={30} color="black" />
        <TouchableOpacity onPress={() => router.push('/inicio')}>
          <Ionicons name="home" size={30} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  Paidetodos: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#000',
    height: 50,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  iconButton: {
    paddingLeft: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#8FF170',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
