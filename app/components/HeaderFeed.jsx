import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function HeaderFeed() {
  return (
    <View style={styles.header}>
      <Pressable style={styles.boton}>
        <Ionicons name="add-outline" size={37} color="#f5f5f5" />
      </Pressable>

      <View style={styles.logoZona}>
        <Text style={styles.logo}>Instagram</Text>
        <Ionicons name="chevron-down" size={20} color="#f5f5f5" />
      </View>

      <Pressable style={styles.boton}>
        <Ionicons name="heart-outline" size={34} color="#f5f5f5" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 68,
    paddingHorizontal: 16,
    backgroundColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#151515",
  },
  boton: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  logoZona: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  logo: {
    color: "#f5f5f5",
    fontSize: 36,
    lineHeight: 46,
    fontFamily: Platform.OS === "ios" ? "Snell Roundhand" : "cursive",
  },
})

export default HeaderFeed
