import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; 
import {auth} from "../firebase.config"

import david from '../assets/david.png'
import ff from '../assets/ff.jpeg'
import mine from '../assets/minecraft.jpeg'
import roblox from '../assets/roblox.jpeg'
import mario from '../assets/supermario.jpeg'
import vava from '../assets/VAVA.jpeg'
import gta from '../assets/gta.png'
import cod from '../assets/cod.jpeg'
import cs from '../assets/cs.png'
import lol from '../assets/lol.jpeg'


export default function TelaInicial() {
  const router = useRouter();
  const user = auth.currentUser;

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>
     
        <View style={styles.header}>

          <Ionicons name="cart-outline" size={28} color="white" />
          
          <View style={styles.avatarContainer}>
            <Image source={david} style={styles.avatar} />
            <Text style={styles.userText}>Olá, David</Text>
          </View>

        </View>

        <TextInput placeholder="Pesquisar" placeholderTextColor="#aaa" style={styles.searchBar} />

        <Text style={styles.sectionTitle}>Populares</Text>
        <View style={styles.row}>
          <Image source={ff} style={styles.gameCard} />
          <Image source={mine} style={styles.gameCard} />
          <Image source={roblox} style={styles.gameCard} />
        </View>

        {/* Recomendados */}
        <Text style={styles.sectionTitle}>Recomendados para você</Text>
        <View style={styles.row}>
          <Image source={vava} style={styles.gameCard} />
          <Image source={cod} style={styles.gameCard} />
          <Image source={gta} style={styles.gameCard} />
        </View>

        <Text style={styles.sectionTitle}>Lançamentos</Text>
        <View style={styles.containerLancamentos}>
          <Image source={gta} style={styles.CardLancamento} />
          <Image source={cs} style={styles.CardLancamento} />
          <Image source={lol} style={styles.CardLancamento} />
        </View>
      </ScrollView>


      {/* Barra de navegação fixa */}
      <View style={styles.navBar}>
        {/* Vai para Carrinho */}
        <TouchableOpacity onPress={() => router.push("/carrinho")}>
          <Ionicons name="cart-outline" size={28} color="black" />
        </TouchableOpacity>

        {/* Vai para Home */}
        <TouchableOpacity onPress={() => router.push("/inicio")}>
          <Ionicons name="home-outline" size={28} color="black" />
        </TouchableOpacity>

        {/* Vai para Perfil */}
        <TouchableOpacity onPress={() => router.push("/perfil")}>
          <Image source={david} style={styles.navAvatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1c1c1c" },

  scrollContent: { paddingBottom: 1 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
    marginTop: 40, // <<< Faz o header descer mais
  },

  avatarContainer: { flexDirection: "row", alignItems: "center", gap: 8 },

  avatar: { width: 40, height: 40, borderRadius: 30 },

  userText: { color: "white", fontSize: 16 },

  searchBar: {
    backgroundColor: "#333",
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    color: "white",
  },

  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  gameCard: { width: 100, height: 140, borderRadius: 10 },

  banner: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 15,
  },

  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#9df7a1",
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  navAvatar: { width: 32, height: 32, borderRadius: 16 },

  containerLancamentos: {
    alignItems: "center",
    gap: 20,
    padding: 20,
  },

  CardLancamento: {
    width: 250,
    height: 290,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
  },
});
