import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { traerImgGatos } from "../api/catsApi"
import { perfil } from "../data/perfil"
import { posteosBase } from "../data/posteos"
import ErrorMessage from "../components/ErrorMessage"
import HeaderPerfil from "../components/HeaderPerfil"
import Loader from "../components/Loader"
import Perfil from "../components/Perfil"
import Sugerencias from "../components/Sugerencias"
import TabsPerfil from "../components/TabsPerfil"

function PerfilScreen({ navigation }) {
  const [posteos, setPosteos] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    cargarPosteosPerfil()
  }, [])

  async function cargarPosteosPerfil() {
    setCargando(true)
    setError("")

    try {
      const gatos = await traerImgGatos(18)

      const posteosArmados = gatos.map((gato, index) => {
        const datosDelPosteo = posteosBase[index % posteosBase.length]

        return {
          id: gato.id || `perfil-${index}`,
          imagen: gato.url,
          ancho: gato.width,
          alto: gato.height,
          ...datosDelPosteo,
        }
      })

      setPosteos(posteosArmados)
    } catch (err) {
      setError("No pude cargar las publicaciones del perfil.")
    } finally {
      setCargando(false)
    }
  }

  function abrirPosteo(posteo) {
    navigation.navigate("Detalle", {
      posteo: posteo,
    })
  }

  function EncabezadoPerfil() {
    return (
      <>
        <HeaderPerfil usuario={perfil.usuario} />
        <Perfil perfil={perfil} cantidadPublicaciones={posteos.length} />
        <Sugerencias posteos={posteos} />
        <TabsPerfil />
      </>
    )
  }

  if (cargando) {
    return (
      <SafeAreaView style={styles.pantalla} edges={["top", "left", "right"]}>
        <Loader texto="Cargando perfil..." />
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
          numColumns={3}
          renderItem={({ item }) => (
            <Pressable style={styles.posteo} onPress={() => abrirPosteo(item)}>
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<EncabezadoPerfil />}
          ListEmptyComponent={
            <Text style={styles.vacio}>Crea tu primera publicación</Text>
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
  posteo: {
    width: "33.333333%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#161616",
  },
  imagen: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  vacio: {
    color: "#f5f5f5",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 50,
    paddingVertical: 120,
  },
})

export default PerfilScreen
