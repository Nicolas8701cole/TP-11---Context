import { StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

function ReelsScreen() {
  return (
    <SafeAreaView style={styles.pantalla} edges={["top", "left", "right"]}>
      <View style={styles.contenido}>
        <Ionicons name="play-outline" size={58} color="#f5f5f5" />
        <Text style={styles.titulo}>Reels</Text>
        <Text style={styles.texto}>
          Esta sección se mantiene visual para copiar la navegación móvil de la referencia.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#000000",
  },
  contenido: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  titulo: {
    color: "#f5f5f5",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
  },
  texto: {
    color: "#8e8e8e",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 8,
  },
})

export default ReelsScreen
