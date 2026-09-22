import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { traerImgGatos } from "../api/catsApi"
import { posteosBase } from "../data/posteos"
import ErrorMessage from "../components/ErrorMessage"
import HeaderFeed from "../components/HeaderFeed"
import Historias from "../components/Historias"
import Loader from "../components/Loader"
import Posteo from "../components/Posteo"

function FeedScreen({ navigation }) {
  const [posteos, setPosteos] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    cargarPosteos()
  }, [])

  async function cargarPosteos() {
    setCargando(true)
    setError("")

    try {
      const gatos = await traerImgGatos(18)

      const posteosArmados = gatos.map((gato, index) => {
        const datosDelPosteo = posteosBase[index % posteosBase.length]

        return {
          id: gato.id || `posteo-${index}`,
          imagen: gato.url,
          ancho: gato.width,
          alto: gato.height,
          ...datosDelPosteo,
        }
      })

      setPosteos(posteosArmados)
    } catch (err) {
      setError("No pude cargar los posteos. Revisá internet o la API.")
    } finally {
      setCargando(false)
    }
  }

  function abrirPosteo(posteo) {
    navigation.navigate("Detalle", {
      posteo: posteo,
    })
  }

  function abrirPerfil() {
    navigation.navigate("Perfil")
  }

  if (cargando) {
    return (
      <SafeAreaView style={styles.pantalla} edges={["top", "left", "right"]}>
        <Loader texto="Cargando publicaciones..." />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.pantalla} edges={["top", "left", "right"]}>
      {error !== "" ? (
        <ErrorMessage mensaje={error} />
      ) : (
        <FlatList
          data={posteos}
          renderItem={({ item }) => (
            <Posteo
              posteo={item}
              abrirPosteo={abrirPosteo}
              abrirPerfil={abrirPerfil}
            />
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <>
              <HeaderFeed />
              <Historias posteos={posteos} />
            </>
          }
          ListEmptyComponent={
            <Text style={styles.vacio}>No hay publicaciones para mostrar.</Text>
          }
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#000000",
  },
  vacio: {
    color: "#8e8e8e",
    textAlign: "center",
    marginTop: 50,
    fontSize: 15,
  },
})

export default FeedScreen
