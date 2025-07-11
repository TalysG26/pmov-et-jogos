import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import logoET from '../assets/et.jpg';

export default function Index() {
  return (
    <View style={estilos.paiDetodos}>
      <Image source={logoET} style={estilos.logoET} />

      <Text style={estilos.title}>Entrar</Text>
      
      <TextInput 
        style={estilos.input} 
        placeholder="E-mail" 
        placeholderTextColor="#aaa" 
      />
      <TextInput 
        style={estilos.input} 
        placeholder="Senha" 
        secureTextEntry 
        placeholderTextColor="#aaa" 
      />
      
      <Link href="/inicio" style={estilos.button}>
        <Text style={estilos.buttonText}>Entrar</Text> 
      </Link>

      <Link href="/criarconta" style={estilos.link}>
        Não tem conta? Criar conta.
      </Link>

      <Link href="/redefinirsenha" style={estilos.link}>
        Esqueceu a senha?
      </Link>
    </View>
  );
}

const estilos = StyleSheet.create({
  paiDetodos: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  logoET: {
    borderRadius: 30,
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#000',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#79DA76',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', 
    marginBottom: 10
  },
  link: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    textDecorationLine: 'underline',
  },
});
