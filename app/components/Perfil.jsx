import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function PerfilInfo({ perfil, cantidadPublicaciones }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.infoPrincipal}>
        <View style={styles.avatarZona}>
          <Image
            source={require("../../assets/gatitoTierno.gif")}
            style={styles.avatar}
          />
        </View>

        <View style={styles.datosZona}>
          <Text style={styles.nombre}>{perfil.nombre}</Text>

          <View style={styles.estadisticas}>
            <View style={styles.estadistica}>
              <Text style={styles.numero}>{cantidadPublicaciones}</Text>
              <Text style={styles.textoEstadistica}>publicaciones</Text>
            </View>

            <View style={styles.estadistica}>
              <Text style={styles.numero}>{perfil.seguidores}</Text>
              <Text style={styles.textoEstadistica}>seguidores</Text>
            </View>

            <View style={styles.estadistica}>
              <Text style={styles.numero}>{perfil.seguidos}</Text>
              <Text style={styles.textoEstadistica}>seguidos</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.bio}>{perfil.bio}</Text>

      <Pressable style={styles.banners}>
        <Ionicons name="add-outline" size={20} color="#b6b6b6" />
        <Text style={styles.textoBanners}>Agregar banners</Text>
      </Pressable>

      <View style={styles.botonesPerfil}>
        <Pressable style={styles.botonPrincipal}>
          <Text style={styles.textoBoton}>Editar perfil</Text>
        </Pressable>

        <Pressable style={styles.botonPrincipal}>
          <Text style={styles.textoBoton}>Compartir perfil</Text>
        </Pressable>

        <Pressable style={styles.botonPersona}>
          <Ionicons name="person-add-outline" size={22} color="#f5f5f5" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#000000",
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  infoPrincipal: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarZona: {
    width: 114,
    alignItems: "center",
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#303030",
    resizeMode: "cover",
  },
  datosZona: {
    flex: 1,
  },
  nombre: {
    color: "#f5f5f5",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  estadisticas: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  estadistica: {
    alignItems: "center",
  },
  numero: {
    color: "#f5f5f5",
    fontSize: 18,
    fontWeight: "500",
  },
  textoEstadistica: {
    color: "#f5f5f5",
    fontSize: 13,
    marginTop: 2,
  },
  bio: {
    color: "#f5f5f5",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 14,
  },
  banners: {
    height: 35,
    alignSelf: "flex-start",
    marginTop: 18,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#454545",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  textoBanners: {
    color: "#b6b6b6",
    fontSize: 14,
    fontWeight: "600",
  },
  botonesPerfil: {
    flexDirection: "row",
    gap: 7,
    marginTop: 15,
  },
  botonPrincipal: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#2d3033",
    alignItems: "center",
    justifyContent: "center",
  },
  botonPersona: {
    width: 46,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#2d3033",
    alignItems: "center",
    justifyContent: "center",
  },
  textoBoton: {
    color: "#f5f5f5",
    fontSize: 15,
    fontWeight: "700",
  },
})

export default PerfilInfo
