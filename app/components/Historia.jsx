import { Image, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

function Historia({ historia, esPropia }) {
  return (
    <View style={styles.historia}>
      <View style={styles.avatarZona}>
        {esPropia ? (
          <View style={styles.avatarPropioBorde}>
            <Image
              source={require("../../assets/gatitoTierno.gif")}
              style={styles.avatar}
            />
          </View>
        ) : (
          <LinearGradient
            colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.aro}
          >
            <View style={styles.interiorAro}>
              <Image source={{ uri: historia.imagen }} style={styles.avatar} />
            </View>
          </LinearGradient>
        )}

        {esPropia ? (
          <View style={styles.badgePropio}>
            <Ionicons name="add" size={24} color="#ffffff" />
          </View>
        ) : (
          <View style={styles.badgeSeguir}>
            <Ionicons name="person-add-outline" size={19} color="#ffffff" />
          </View>
        )}
      </View>

      <Text style={styles.usuario} numberOfLines={1}>
        {historia.usuario}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  historia: {
    width: 104,
    alignItems: "center",
  },
  avatarZona: {
    width: 88,
    height: 88,
    position: "relative",
  },
  aro: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  interiorAro: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarPropioBorde: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#242424",
    borderWidth: 1,
    borderColor: "#555555",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
    resizeMode: "cover",
  },
  badgePropio: {
    position: "absolute",
    right: -2,
    bottom: 2,
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: "#0095f6",
    borderWidth: 3,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeSeguir: {
    position: "absolute",
    right: 3,
    bottom: 4,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#17191c",
    alignItems: "center",
    justifyContent: "center",
  },
  usuario: {
    width: 100,
    color: "#f2f2f2",
    fontSize: 13,
    textAlign: "center",
    marginTop: 7,
  },
})

export default Historia
