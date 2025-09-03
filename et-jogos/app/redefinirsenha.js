import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config";
import logoET from '../assets/et.jpg';
import Seta from '../assets/seta.png';

export default function RedefinirSenha() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    if (!email) {
      alert("Digite seu e-mail.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert(" Um link de redefinição de senha foi enviado para " + email);
      router.replace("/"); 
    } catch (error) {
      console.error("Erro ao enviar e-mail de recuperação: ", error);
      alert("Verifique se o e-mail está correto ou cadastrado.");
    }
  };

  return (
    <View style={estilos.paiDetodos}>
      <TouchableOpacity onPress={() => router.back()} style={estilos.setaWrapper}>
        <Image source={Seta} style={estilos.seta} />
      </TouchableOpacity>

      <Image source={logoET} style={estilos.logoET} />

  
      <TextInput
        style={estilos.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#555"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />


      <TouchableOpacity onPress={handlePasswordReset} style={estilos.button}>
        <Text style={estilos.buttonText}>Enviar link de redefinição</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
