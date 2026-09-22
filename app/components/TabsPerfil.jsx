import { Pressable, StyleSheet, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function TabsPerfil() {
  return (
    <View style={styles.contenedor}>
      <Pressable style={[styles.tab, styles.tabActivo]}>
        <Ionicons name="grid-outline" size={28} color="#f5f5f5" />
      </Pressable>

      <Pressable style={styles.tab}>
        <Ionicons name="play-outline" size={29} color="#8e8e8e" />
      </Pressable>

      <Pressable style={styles.tab}>
        <Ionicons name="person-outline" size={28} color="#8e8e8e" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    height: 58,
    backgroundColor: "#000000",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActivo: {
    borderBottomWidth: 2,
    borderBottomColor: "#f5f5f5",
  },
})

export default TabsPerfil
