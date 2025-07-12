import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logoET from '../assets/et.jpg';

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={estilos.paiDetodos}>
      <Image source={logoET} style={estilos.logoET} />
      
      <TextInput 
        style={estilos.input} 
        placeholder="Bem-vindo!" 
        placeholderTextColor="#000" 
      />

      <TouchableOpacity 
        style={estilos.button}
        onPress={() => router.push('/descricaoJogo')}
      >
        <Text style={estilos.buttonText}>Ver Descrição do Jogo</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.button}
        onPress={() => router.push('/perfil')}
      >
        <Text style={estilos.buttonText}>Ir para o perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={estilos.button}
        onPress={() => router.push('/loja')}
      >
        <Text style={estilos.buttonText}>Ir para a loja</Text>
      </TouchableOpacity>
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
    gap: 15,
  },
  setaWrapper: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
  },
  seta: {
    width: 60,
    height: 40,
    borderRadius: 10,
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
  logoET: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    width: '70%',
    height: 50,
    backgroundColor: '#79DA76',
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
