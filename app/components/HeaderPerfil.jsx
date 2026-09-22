import { Pressable, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function HeaderPerfil({ usuario }) {
  return (
    <View style={styles.header}>
      <Pressable style={styles.boton}>
        <Ionicons name="add-outline" size={36} color="#f5f5f5" />
      </Pressable>

      <View style={styles.usuarioZona}>
        <Ionicons name="lock-closed-outline" size={20} color="#f5f5f5" />
        <Text style={styles.usuario}>{usuario}</Text>
        <Ionicons name="chevron-down" size={20} color="#f5f5f5" />
        <View style={styles.punto} />
      </View>

      <View style={styles.acciones}>
        <Pressable style={styles.boton}>
          <Ionicons name="at-circle-outline" size={32} color="#f5f5f5" />
        </Pressable>
        <Pressable style={styles.boton}>
          <Ionicons name="menu-outline" size={38} color="#f5f5f5" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 69,
    paddingHorizontal: 13,
    backgroundColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boton: {
    width: 43,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  usuarioZona: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  usuario: {
    color: "#f5f5f5",
    fontSize: 23,
    fontWeight: "700",
  },
  punto: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#ff2446",
  },
  acciones: {
    flexDirection: "row",
  },
})

export default HeaderPerfil
