import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, Pressable } from 'react-native';
import { Link } from 'expo-router';
import logoET from '../assets/et.jpg'
import { auth } from '../firebase.config';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Index() {
  const [email, setEmail] = useState('tgfs@aluno.ifal.edu.br');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      
      const userCredential =  await signInWithEmailAndPassword(auth, email, senha);
          router.navigate('/inicio');
      const use = userCredential.user
      console.log(use)
      

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);

    }
  }

  return (
    <View style={estilos.paiDetodos}>
      <Image source={logoET} style={estilos.logoET} />



      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={a => setEmail(a)}
      />

      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="#aaa"
        value={senha}
        onChangeText={a => setSenha(a)}
      />

      <Pressable onPress={handleLogin} style={estilos.button}>
  <Text style={estilos.text}>Entrar</Text>
</Pressable>


      <Link href="/criarconta" style={estilos.textLink}>
        Não tem conta? Criar conta.
      </Link>

      <Link href="/redefinirsenha" style={estilos.textLink}>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 10,
    color: '#000'
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 3,
  },
  textLink: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    textDecorationLine: 'underline',
  },
});
