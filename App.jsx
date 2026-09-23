import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { GuardadosProvider } from "./app/context/GuardadosContext"
import AppNavigator from "./app/navigation/AppNavigator"

function App() {
  return (
    <SafeAreaProvider>
      <GuardadosProvider>
        <StatusBar style="light" />
        <AppNavigator />
      </GuardadosProvider>
    </SafeAreaProvider>
  )
}

export default App
