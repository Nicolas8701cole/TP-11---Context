import { FlatList, StyleSheet, View } from "react-native"

import Historia from "./Historia"

function Historias({ posteos }) {
  const historias = [
    {
      id: "historia-propia",
      usuario: "Tu historia",
      imagen: "",
      esPropia: true,
    },
    ...posteos.slice(0, 7).map((posteo, index) => ({
      id: `historia-${posteo.id}-${index}`,
      usuario: posteo.usuario,
      imagen: posteo.imagen,
      esPropia: false,
    })),
  ]

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={historias}
        horizontal
        renderItem={({ item }) => (
          <Historia historia={item} esPropia={item.esPropia} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#000000",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#151515",
  },
  lista: {
    paddingHorizontal: 8,
  },
})

export default Historias
