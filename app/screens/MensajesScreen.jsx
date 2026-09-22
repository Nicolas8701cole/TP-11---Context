import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const chats = [
  { id: "chat-1", usuario: "MeowMeowMeow" },
  { id: "chat-2", usuario: "fighters2d.oficial" },
  { id: "chat-3", usuario: "NikolaiDarrinsky" },
]

function MensajesScreen() {
  return (
    <SafeAreaView style={styles.pantalla} edges={["top", "left", "right"]}>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <View style={styles.chat}>
            <Image
              source={require("../../assets/gatitoTierno.gif")}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.usuario}>{item.usuario}</Text>
              <Text style={styles.mensaje}>Meow · ahora</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.titulo}>Mensajes</Text>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#000000",
  },
  titulo: {
    color: "#f5f5f5",
    fontSize: 25,
    fontWeight: "700",
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  chat: {
    minHeight: 72,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12,
  },
  usuario: {
    color: "#f5f5f5",
    fontSize: 15,
    fontWeight: "600",
  },
  mensaje: {
    color: "#8e8e8e",
    fontSize: 14,
    marginTop: 4,
  },
})

export default MensajesScreen
