import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Button } from 'react-native-paper';
import logoET from '../assets/et.jpg';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Index() {
  const [email, setEmail] = useState('tgfs1@aluno.ifal.edu.br');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      setLoading(true); // ativa o spinner
      await signInWithEmailAndPassword(auth, email, senha);
      setLoading(false); // desliga o spinner
      router.replace('/inicio');
      console.log("Login realizado com sucesso!");
    } catch (error) {
      setLoading(false);
      alert("Erro ao fazer login. Verifique sua senha ou email.");
      console.error(error);
    }
  };

  return (
    <View style={estilos.paiDetodos}>
      <Image source={logoET} style={estilos.logoET} />

      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="#aaa"
        value={senha}
        onChangeText={setSenha}
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        loading={loading}
        disabled={loading} 
        style={estilos.button}
        labelStyle={{ color: "#000", fontWeight: "bold", fontSize: 16 }}
      >
        {loading ? "Entrando..." : "Entrar"}
      </Button>

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
  },
  textLink: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    textDecorationLine: 'underline',
  },
});
