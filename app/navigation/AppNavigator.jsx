import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import DetallePostScreen from "../screens/DetallePostScreen"
import MainTabs from "./MainTabs"

const Stack = createNativeStackNavigator()

const temaOscuro = {
  dark: true,
  colors: {
    primary: "#ffffff",
    background: "#000000",
    card: "#000000",
    text: "#ffffff",
    border: "#171717",
    notification: "#ff3040",
  },
  fonts: {
    regular: {
      fontFamily: "System",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "System",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "System",
      fontWeight: "700",
    },
    heavy: {
      fontFamily: "System",
      fontWeight: "800",
    },
  },
}

function AppNavigator() {
  return (
    <NavigationContainer theme={temaOscuro}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contenido,
        }}
      >
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Detalle" component={DetallePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#000000",
  },
})

export default AppNavigator
