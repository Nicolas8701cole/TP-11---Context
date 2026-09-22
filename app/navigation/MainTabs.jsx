import { Image, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import BuscarScreen from "../screens/BuscarScreen"
import FeedScreen from "../screens/FeedScreen"
import MensajesScreen from "../screens/MensajesScreen"
import PerfilScreen from "../screens/PerfilScreen"
import ReelsScreen from "../screens/ReelsScreen"

const Tab = createBottomTabNavigator()

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarIcon: ({ focused }) => mostrarIcono(route.name, focused),
      })}
    >
      <Tab.Screen name="Inicio" component={FeedScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Mensajes" component={MensajesScreen} />
      <Tab.Screen name="Buscar" component={BuscarScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  )
}

function mostrarIcono(nombre, activo) {
  if (nombre === "Inicio") {
    return (
      <Ionicons
        name={activo ? "home" : "home-outline"}
        size={31}
        color="#f5f5f5"
      />
    )
  }

  if (nombre === "Reels") {
    return (
      <Ionicons
        name={activo ? "play-circle" : "play-circle-outline"}
        size={31}
        color="#f5f5f5"
      />
    )
  }

  if (nombre === "Mensajes") {
    return <Ionicons name="paper-plane-outline" size={31} color="#f5f5f5" />
  }

  if (nombre === "Buscar") {
    return (
      <Ionicons
        name={activo ? "search" : "search-outline"}
        size={32}
        color="#f5f5f5"
      />
    )
  }

  return (
    <Image
      source={require("../../assets/gatoFranco.png")}
      style={[styles.avatarTab, activo && styles.avatarTabActivo]}
    />
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingTop: 5,
    paddingBottom: 8,
    backgroundColor: "#000000",
    borderTopWidth: 1,
    borderTopColor: "#171717",
  },
  tabBarItem: {
    height: 56,
  },
  avatarTab: {
    width: 31,
    height: 31,
    borderRadius: 16,
    resizeMode: "cover",
  },
  avatarTabActivo: {
    borderWidth: 2,
    borderColor: "#f5f5f5",
  },
})

export default MainTabs
