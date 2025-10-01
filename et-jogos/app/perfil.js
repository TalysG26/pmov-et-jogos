import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import Perfil from '../assets/david.png';

export default function App() {
  const router = useRouter(); 
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Usuário deslogado com sucesso!");
      router.replace("/"); 
    } catch (error) {
      console.error("Erro ao deslogar: ", error);
    }
  };

  return (
    <View style={styles.Paidetodos}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.foto}>
          <Image
            source={Perfil}
            style={styles.fotodeperfil}
          />
          
        </View>

        <View style={styles.componentes}>
          <Option label="Troca de Perfil" />
          <Text tyles={styles.email} > {auth.email}</ Text>
          <Option label="Jogos favoritos" />
          
          <Option 
            label="Historico de compra" 
            onPress={() => router.push('/historicoCompras')} 
          />

          <Option label="Modo Claro" icon={<Feather name="refresh-cw" size={20} color="#9df7a1" />} />
        </View>

       
        <TouchableOpacity
          style={styles.butaoDeSair}
          onPress={handleLogout} 
        >
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.icons}>
        <TouchableOpacity onPress={() => router.push('/carrinho')}>
          <Ionicons name="cart" size={30} color="black" />
        </TouchableOpacity>

     
        <TouchableOpacity onPress={() => router.push('/inicio')}>
          <Ionicons name="home" size={30} color="black" />
        </TouchableOpacity>

        <Image
          source={Perfil}
          style={styles.menuPerfil}
        />
      </View>
    </View>
  );
}

const Option = ({ label, subLabel, icon, onPress }) => {
  if (onPress) {
    return (
      <TouchableOpacity style={styles.iconsbarra} onPress={onPress}>
        <View>
          <Text style={styles.optionLabel}>{label}</Text>
          {subLabel && <Text style={styles.optionSubLabel}>{subLabel}</Text>}
        </View>
        {icon ? icon : <Text style={styles.arrow}>{'>'}</Text>}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.iconsbarra}>
      <View>
        <Text style={styles.optionLabel}>{label}</Text>
        {subLabel && <Text style={styles.optionSubLabel}>{subLabel}</Text>}
      </View>
      {icon ? icon : <Text style={styles.arrow}>{'>'}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  Paidetodos: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1c1c1c', 
    gap: 10,
   paddingTop: 100
  },
  content: {
    padding: 20,
    gap: 10,
  },
  foto: {
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  fotodeperfil: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#fff',
    gap: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
    letterSpacing: 4,
  },
  componentes: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 16,
    gap: 16,
  },
  iconsbarra: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionLabel: {
    color: '#9df7a1', 
    fontSize: 14,
  },
  optionSubLabel: {
    color: '#ccc',
    fontSize: 13,
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
  },
  butaoDeSair: {
    marginTop: 30,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width: 140,
  },
  logoutText: {
    color: '#000',
    fontWeight: '600',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9df7a1', 
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuPerfil: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
