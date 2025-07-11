import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import Perfil from '../assets/david.png';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.profileContainer}>
          <Image
            source={ Perfil }
            style={styles.profileImage}
          />
          <Text style={styles.name}>D a v i d</Text>
        </View>

        <View style={styles.optionBox}>
          <Option label="Troca de Perfil" />
          <Option label="E-mail" subLabel="dhslima@gmail.com" />
          <Option label="Jogos favoritos" />
          <Option label="Historico de compra" />
          <Option label="Modo Claro" icon={<Feather name="refresh-cw" size={20} color="green" />} />
        </View>

      
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <Ionicons name="cart" size={24} color="black" />
        <Ionicons name="home" size={24} color="black" />
        <Image
          source={ Perfil }
          style={styles.menuProfile}
        />
      </View>
    </View>
  );
}

const Option = ({ label, subLabel, icon }) => (
  <View style={styles.optionRow}>
    <View>
      <Text style={styles.optionLabel}>{label}</Text>
      {subLabel && <Text style={styles.optionSubLabel}>{subLabel}</Text>}
    </View>
    {icon ? icon : <Text style={styles.arrow}>{'>'}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  content: {
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
    letterSpacing: 4,
  },
  optionBox: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 16,
    gap: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionLabel: {
    color: 'green',
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
  logoutButton: {
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
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#8FF170',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuProfile: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
