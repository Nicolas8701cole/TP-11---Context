import { Pressable, Share, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function AccionesPosteo({
  posteo,
  likeActivo,
  cantidadLikes,
  darLike,
  abrirPosteo,
  guardado,
  cambiarGuardado,
  repostActivo,
  cambiarRepost,
}) {
  async function compartirPosteo() {
    await Share.share({
      message: posteo.caption + "\n" + posteo.imagen,
    })
  }

  return (
    <View style={styles.acciones}>
      <View style={styles.accionesIzquierda}>
        <Pressable style={styles.accion} onPress={darLike}>
          <Ionicons
            name={likeActivo ? "heart" : "heart-outline"}
            size={31}
            color={likeActivo ? "#ff3040" : "#f5f5f5"}
          />
          <Text style={styles.numero}>{cantidadLikes}</Text>
        </Pressable>

        <Pressable style={styles.accion} onPress={() => abrirPosteo(posteo)}>
          <Ionicons name="chatbubble-outline" size={29} color="#f5f5f5" />
          <Text style={styles.numero}>{posteo.comentarios.length}</Text>
        </Pressable>

        <Pressable style={styles.accion} onPress={cambiarRepost}>
          <Ionicons
            name="repeat-outline"
            size={31}
            color={repostActivo ? "#5dd66f" : "#f5f5f5"}
          />
          <Text style={styles.numero}>
            {posteo.reposts + (repostActivo ? 1 : 0)}
          </Text>
        </Pressable>

        <Pressable style={styles.accion} onPress={compartirPosteo}>
          <Ionicons name="paper-plane-outline" size={29} color="#f5f5f5" />
          <Text style={styles.numero}>{posteo.compartidos}</Text>
        </Pressable>
      </View>

      <Pressable style={styles.guardar} onPress={cambiarGuardado}>
        <Ionicons
          name={guardado ? "bookmark" : "bookmark-outline"}
          size={31}
          color="#f5f5f5"
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
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
  accion: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  numero: {
    color: "#f5f5f5",
    fontSize: 15,
    fontWeight: "600",
  },
  guardar: {
    width: 38,
    alignItems: "flex-end",
  },
})

export default AccionesPosteo
