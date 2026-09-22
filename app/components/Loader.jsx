import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

function Loader({ texto }) {
  return (
    <View style={styles.contenedor}>
      <ActivityIndicator size="large" color="#f5f5f5" />
      <Text style={styles.texto}>{texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#a8a8a8",
    fontSize: 14,
    marginTop: 14,
  },
})

export default Loader
