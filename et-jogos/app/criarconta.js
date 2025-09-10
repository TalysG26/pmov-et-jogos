import React from 'react'; 
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity,    } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import logoET from '../assets/et.jpg';
import Seta from '../assets/seta.png';
import { useState } from 'react';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword} from "firebase/auth";

export default function CriarConta() {
        const [newEmail, newSetEmail] = useState('');
        const [newSenha, newSetSenha] = useState('');
        const[loading, setLoading] = useState(false)
        const router = useRouter();
      
        const CreateUser = async () => {
          try {
            
            const use = userCredential.user;
            const cadastro = CreateUser(newEmail, newSenha)
           
         if(cadastro){
            setLoading(true)
             await createUserWithEmailAndPassword(auth, newEmail, newSenha);
            setLoading(false)
            router.navigate('/inicio');
            console.log(use)
          }
            
      
          } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
      
          }
        }
  

  return (
    <View style={estilos.paiDetodos}>
      <TouchableOpacity onPress={() => router.back()} style={estilos.setaWrapper}>
        <Image source={Seta} style={estilos.seta} />
      </TouchableOpacity>

      <Image source={logoET} style={estilos.logoET} />

      <TextInput
        style={estilos.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        value={newEmail}
        onChangeText={a => newSetEmail(a)}
      />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        value={newSenha}
        onChangeText={a => newSetSenha(a)}
      />
      <TextInput
        style={estilos.input}
        placeholder="CPF"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity 
        style={estilos.button}
        onPress={CreateUser} 
      >
        <Button style={estilos.buttonText} CreateUser={'login'}>Criar Conta</Button>
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
