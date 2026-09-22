import { useEffect, useState } from "react"
import { FlatList, Image, StyleSheet, TextInput, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

import { traerImgGatos } from "../api/catsApi"
import Loader from "../components/Loader"

function BuscarScreen() {
  const [gatos, setGatos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    cargarGatos()
  }, [])

  async function cargarGatos() {
    try {
      const respuesta = await traerImgGatos(24)
      setGatos(respuesta)
    } finally {
      setCargando(false)
    }
  }

  if (cargando) {
    return (
      <SafeAreaView style={styles.pantalla} edges={["top", "left", "right"]}>
        <Loader texto="Cargando explorar..." />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.pantalla} edges={["top", "left", "right"]}>
      <View style={styles.buscador}>
        <Ionicons name="search-outline" size={20} color="#8e8e8e" />
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          placeholderTextColor="#8e8e8e"
          value={busqueda}
          onChangeText={setBusqueda}
        />
      </View>

      <FlatList
        data={gatos}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.celda}>
            <Image source={{ uri: item.url }} style={styles.imagen} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#000000",
  },
  buscador: {
    height: 42,
    marginHorizontal: 12,
    marginVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 11,
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    color: "#f5f5f5",
    fontSize: 16,
  },
  celda: {
    width: "33.333333%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#000000",
  },
  imagen: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
})

export default BuscarScreen
