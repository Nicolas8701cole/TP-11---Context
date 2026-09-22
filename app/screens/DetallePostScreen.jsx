import { useState } from "react"
import {
  FlatList,
  Image,
  Linking,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

function DetallePostScreen({ route, navigation }) {
  const { posteo } = route.params
  const [likeActivo, setLikeActivo] = useState(false)
  const [cantidadLikes, setCantidadLikes] = useState(posteo.likes)
  const [guardado, setGuardado] = useState(false)

  function darLike() {
    if (likeActivo) {
      setCantidadLikes(cantidadLikes - 1)
    } else {
      setCantidadLikes(cantidadLikes + 1)
    }

    setLikeActivo(!likeActivo)
  }

  async function compartirPosteo() {
    await Share.share({
      message: posteo.caption + "\n" + posteo.imagen,
    })
  }

  function abrirLink() {
    if (posteo.link !== "") {
      Linking.openURL(posteo.link)
    }
  }

  function abrirPerfil() {
    navigation.navigate("Main", {
      screen: "Perfil",
    })
  }

  function EncabezadoDetalle() {
    return (
      <View>
        <View style={styles.headerDetalle}>
          <Pressable style={styles.botonHeader} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={31} color="#f5f5f5" />
          </Pressable>
          <Text style={styles.tituloHeader}>Publicación</Text>
          <View style={styles.botonHeader} />
        </View>

        <View style={styles.usuarioZona}>
          <Pressable style={styles.usuarioPressable} onPress={abrirPerfil}>
            <Image source={{ uri: posteo.imagen }} style={styles.avatar} />
            <View style={styles.datosUsuario}>
              <View style={styles.usuarioFila}>
                <Text style={styles.usuario}>{posteo.usuario}</Text>
                {posteo.verificado && (
                  <Ionicons name="checkmark-circle" size={16} color="#0095f6" />
                )}
              </View>
              <Text style={styles.ubicacion}>{posteo.ubicacion}</Text>
            </View>
          </Pressable>

          <Ionicons name="ellipsis-vertical" size={24} color="#f5f5f5" />
        </View>

        <Image source={{ uri: posteo.imagen }} style={styles.imagen} />

        <View style={styles.acciones}>
          <View style={styles.accionesIzquierda}>
            <Pressable onPress={darLike}>
              <Ionicons
                name={likeActivo ? "heart" : "heart-outline"}
                size={32}
                color={likeActivo ? "#ff3040" : "#f5f5f5"}
              />
            </Pressable>

            <Pressable>
              <Ionicons name="chatbubble-outline" size={30} color="#f5f5f5" />
            </Pressable>

            <Pressable onPress={compartirPosteo}>
              <Ionicons name="paper-plane-outline" size={30} color="#f5f5f5" />
            </Pressable>
          </View>

          <Pressable onPress={() => setGuardado(!guardado)}>
            <Ionicons
              name={guardado ? "bookmark" : "bookmark-outline"}
              size={31}
              color="#f5f5f5"
            />
          </Pressable>
        </View>

        <View style={styles.informacion}>
          <Text style={styles.likes}>{cantidadLikes} Me gusta</Text>

          <Text style={styles.caption}>
            <Text style={styles.usuarioCaption}>{posteo.usuario} </Text>
            {posteo.caption}
          </Text>

          <Text style={styles.etiquetas}>{posteo.etiquetas.join(" ")}</Text>

          {posteo.esPromo && (
            <Pressable onPress={abrirLink}>
              <Text style={styles.link}>fighters2d.netlify.app</Text>
            </Pressable>
          )}

          <Text style={styles.tituloComentarios}>Comentarios</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.pantalla} edges={["top", "left", "right", "bottom"]}>
      <FlatList
        data={posteo.comentarios}
        renderItem={({ item, index }) => (
          <View style={styles.comentario}>
            <Image source={{ uri: posteo.imagen }} style={styles.avatarComentario} />
            <Text style={styles.textoComentario}>
              <Text style={styles.usuarioComentario}>usuario{index + 1} </Text>
              {item}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => `${posteo.id}-comentario-${index}`}
        ListHeaderComponent={<EncabezadoDetalle />}
        ListFooterComponent={<Text style={styles.fecha}>{posteo.fecha}</Text>}
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
  headerDetalle: {
    height: 58,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#1c1c1c",
  },
  botonHeader: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  tituloHeader: {
    color: "#f5f5f5",
    fontSize: 19,
    fontWeight: "700",
  },
  usuarioZona: {
    height: 66,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  usuarioPressable: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  datosUsuario: {
    flex: 1,
  },
  usuarioFila: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  usuario: {
    color: "#f5f5f5",
    fontSize: 15,
    fontWeight: "700",
  },
  ubicacion: {
    color: "#f5f5f5",
    fontSize: 12,
    marginTop: 2,
  },
  imagen: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    backgroundColor: "#151515",
  },
  acciones: {
    minHeight: 58,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accionesIzquierda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  informacion: {
    paddingHorizontal: 13,
    paddingBottom: 12,
  },
  likes: {
    color: "#f5f5f5",
    fontSize: 14,
    fontWeight: "700",
  },
  caption: {
    color: "#f5f5f5",
    fontSize: 15,
    lineHeight: 21,
    marginTop: 7,
  },
  usuarioCaption: {
    fontWeight: "700",
  },
  etiquetas: {
    color: "#e0f1ff",
    fontSize: 14,
    marginTop: 5,
  },
  link: {
    color: "#e0f1ff",
    fontSize: 14,
    marginTop: 5,
  },
  tituloComentarios: {
    color: "#f5f5f5",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 18,
  },
  comentario: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarComentario: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 10,
  },
  textoComentario: {
    flex: 1,
    color: "#f5f5f5",
    fontSize: 14,
    lineHeight: 19,
  },
  usuarioComentario: {
    fontWeight: "700",
  },
  fecha: {
    color: "#8e8e8e",
    fontSize: 13,
    paddingHorizontal: 13,
    paddingVertical: 18,
  },
})

export default DetallePostScreen
