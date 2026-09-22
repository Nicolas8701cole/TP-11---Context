import { StyleSheet, Text, View } from "react-native"

function ErrorMessage({ mensaje }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>No se pudo cargar</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    margin: 24,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#171717",
    borderWidth: 1,
    borderColor: "#333333",
  },
  titulo: {
    color: "#f5f5f5",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  mensaje: {
    color: "#a8a8a8",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 7,
  },
})

export default ErrorMessage
