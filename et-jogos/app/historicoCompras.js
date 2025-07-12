import React from 'react'; 
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import logoET from '../assets/et.jpg';
import Seta from '../assets/seta.png';

export default function CriarConta() {
  const router = useRouter();

  return (
    <View style={estilos.paiDetodos}>
      <TouchableOpacity onPress={() => router.back()} style={estilos.setaWrapper}>
        <Image source={Seta} style={estilos.seta} />
      </TouchableOpacity>

      <Image source={logoET} style={estilos.logoET} />

      <TextInput
        style={estilos.input}
        placeholder="Historico de Compras"
        placeholderTextColor="#aaa"
      />
   
    </View>
  );
}

const estilos = StyleSheet.create({
  paiDetodos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
    gap: 25,
  },
  setaWrapper: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
    color:'#79DA76',
  },
  seta: {
    width: 60,
    height: 40,
    borderRadius: 10,
    color:'#79DA76',
  },
  logoET: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#999',
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: '70%',
    height: 50,
    backgroundColor: '#79DA76',
    color:'#79DA76',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
