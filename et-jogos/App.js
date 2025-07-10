import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logoET from './assets/et.jpg'

export default function App() {
  return (


    <View style={estilos.paiDetodos}>
<Image source={logoET} style={estilos.logoET} />


      <Text style={estilos.title}>Entrar</Text>
      <TextInput style={estilos.input} placeholder="E-mail" placeholderTextColor="#aaa" />
      <TextInput style={estilos.input} placeholder="Senha" secureTextEntry placeholderTextColor="#aaa" />
      <TouchableOpacity style={estilos.button}>
        <Text style={estilos.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={estilos.link}>Não tem conta? Criar conta.</Text>
      <Text style={estilos.link}>Esqueceu a senha?</Text>
    </View>
  );
}


const estilos = StyleSheet.create({
  paiDetodos:{
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    width: '100%',
    height: 50,
    backgroundColor: '#69f069',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    textDecorationLine: 'underline',
  },
});
