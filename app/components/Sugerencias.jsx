import { useState } from "react"
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function Sugerencias({ posteos }) {
  const sugerencias = posteos.slice(0, 6).map((posteo, index) => ({
    id: `sugerencia-${posteo.id}-${index}`,
    usuario: posteo.usuario,
    imagen: posteo.imagen,
  }))

  return (
    <View style={styles.contenedor}>
      <View style={styles.tituloZona}>
        <Text style={styles.titulo}>Descubrir personas</Text>
        <Pressable>
          <Text style={styles.verTodo}>Ver todo</Text>
        </Pressable>
      </View>

      <FlatList
        data={sugerencias}
        horizontal
        renderItem={({ item }) => <TarjetaSugerencia sugerencia={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />
    </View>
  )
}

function TarjetaSugerencia({ sugerencia }) {
  const [siguiendo, setSiguiendo] = useState(false)

  return (
    <View style={styles.tarjeta}>
      <Pressable style={styles.cerrar}>
        <Ionicons name="close-outline" size={24} color="#f5f5f5" />
      </Pressable>

      <Image source={{ uri: sugerencia.imagen }} style={styles.avatar} />

      <Text style={styles.usuario} numberOfLines={1}>
        {sugerencia.usuario}
      </Text>

      <Pressable
        style={[styles.botonSeguir, siguiendo && styles.botonSiguiendo]}
        onPress={() => setSiguiendo(!siguiendo)}
      >
        <Text style={styles.textoSeguir}>
          {siguiendo ? "Siguiendo" : "Seguir"}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#000000",
    paddingBottom: 18,
  },
  tituloZona: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titulo: {
    color: "#f5f5f5",
    fontSize: 18,
    fontWeight: "700",
  },
  verTodo: {
    color: "#668cff",
    fontSize: 17,
    fontWeight: "700",
  },
  lista: {
    paddingHorizontal: 13,
    gap: 8,
  },
  tarjeta: {
    width: 174,
    height: 230,
    borderWidth: 1,
    borderColor: "#353535",
    borderRadius: 13,
    backgroundColor: "#17181a",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 13,
    position: "relative",
  },
  cerrar: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  avatar: {
    width: 98,
    height: 98,
    borderRadius: 49,
    resizeMode: "cover",
  },
  usuario: {
    width: "100%",
    color: "#f5f5f5",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 15,
  },
  botonSeguir: {
    width: "100%",
    height: 38,
    borderRadius: 8,
    backgroundColor: "#4d5fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },
  botonSiguiendo: {
    backgroundColor: "#34373a",
  },
  textoSeguir: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
})

export default Sugerencias
