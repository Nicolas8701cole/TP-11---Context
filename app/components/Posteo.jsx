import { useState } from "react"
import { Image, Linking, Pressable, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import AccionesPosteo from "./AccionesPosteo"

function Posteo({ posteo, abrirPosteo, abrirPerfil }) {
  const [likeActivo, setLikeActivo] = useState(false)
  const [cantidadLikes, setCantidadLikes] = useState(posteo.likes)
  const [siguiendo, setSiguiendo] = useState(false)
  const [guardado, setGuardado] = useState(false)
  const [repostActivo, setRepostActivo] = useState(false)

  function darLike() {
    if (likeActivo) {
      setCantidadLikes(cantidadLikes - 1)
    } else {
      setCantidadLikes(cantidadLikes + 1)
    }

    setLikeActivo(!likeActivo)
  }

  function abrirLink() {
    if (posteo.link !== "") {
      Linking.openURL(posteo.link)
    }
  }

  return (
    <View style={styles.posteo}>
      <View style={styles.headerPosteo}>
        <Pressable style={styles.usuarioZona} onPress={abrirPerfil}>
          <Image source={{ uri: posteo.imagen }} style={styles.avatar} />

          <View style={styles.datosUsuario}>
            <View style={styles.usuarioFila}>
              <Text style={styles.usuario}>{posteo.usuario}</Text>
              {posteo.verificado && (
                <Ionicons name="checkmark-circle" size={16} color="#0095f6" />
              )}
            </View>
            <Text style={styles.ubicacion} numberOfLines={1}>
              {posteo.ubicacion}
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={[styles.botonSeguir, siguiendo && styles.botonSiguiendo]}
          onPress={() => setSiguiendo(!siguiendo)}
        >
          <Text style={styles.textoSeguir}>
            {siguiendo ? "Siguiendo" : "Seguir"}
          </Text>
        </Pressable>

        <Pressable style={styles.masOpciones}>
          <Ionicons name="ellipsis-vertical" size={24} color="#f5f5f5" />
        </Pressable>
      </View>

      <Pressable onPress={() => abrirPosteo(posteo)}>
        <Image source={{ uri: posteo.imagen }} style={styles.imagen} />
      </Pressable>

      <AccionesPosteo
        posteo={posteo}
        likeActivo={likeActivo}
        cantidadLikes={cantidadLikes}
        darLike={darLike}
        abrirPosteo={abrirPosteo}
        guardado={guardado}
        cambiarGuardado={() => setGuardado(!guardado)}
        repostActivo={repostActivo}
        cambiarRepost={() => setRepostActivo(!repostActivo)}
      />

      <View style={styles.informacion}>
        <Text style={styles.caption} numberOfLines={2}>
          <Text style={styles.usuarioCaption}>{posteo.usuario} </Text>
          {posteo.caption}
        </Text>

        {posteo.esPromo && (
          <Pressable onPress={abrirLink}>
            <Text style={styles.link}>fighters2d.netlify.app</Text>
          </Pressable>
        )}

        <Pressable onPress={() => abrirPosteo(posteo)}>
          <Text style={styles.verComentarios}>
            Ver los {posteo.comentarios.length} comentarios
          </Text>
        </Pressable>

        <Text style={styles.fecha}>{posteo.fecha}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  posteo: {
    width: "100%",
    backgroundColor: "#000000",
    paddingBottom: 11,
  },
  headerPosteo: {
    minHeight: 68,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  usuarioZona: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    resizeMode: "cover",
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
  botonSeguir: {
    height: 38,
    minWidth: 88,
    paddingHorizontal: 16,
    borderRadius: 9,
    backgroundColor: "#363a3d",
    alignItems: "center",
    justifyContent: "center",
  },
  botonSiguiendo: {
    backgroundColor: "#222528",
  },
  textoSeguir: {
    color: "#f5f5f5",
    fontSize: 15,
    fontWeight: "700",
  },
  masOpciones: {
    width: 38,
    height: 42,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  imagen: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    backgroundColor: "#151515",
  },
  informacion: {
    paddingHorizontal: 13,
  },
  caption: {
    color: "#f5f5f5",
    fontSize: 15,
    lineHeight: 21,
  },
  usuarioCaption: {
    fontWeight: "700",
  },
  link: {
    color: "#e0f1ff",
    fontSize: 14,
    marginTop: 5,
  },
  verComentarios: {
    color: "#9b9b9b",
    fontSize: 14,
    marginTop: 7,
  },
  fecha: {
    color: "#8e8e8e",
    fontSize: 13,
    marginTop: 7,
  },
})

export default Posteo
