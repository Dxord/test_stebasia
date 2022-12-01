import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  AppState,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Provider } from "react-redux";
import { config, theme } from "./app/config";
import { RootStackNavigator } from "./app/navigator";
import { store } from "./app/store";
import { ThemeColorModeListener } from "./common/utils";

function App() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    appStatus();
  }, []);
  const appStatus = () => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // getCountUnread();
        console.log("App has come to the foreground!");
      } else {
        // getCountUnread();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  };

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme} config={config}>
        <ThemeColorModeListener />
        <NavigationContainer fallback={<ActivityIndicator />}>
          <SafeAreaView style={styles.safeAreaViewContainer}>
            <RootStackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  gestureHandlerContainer: {
    flex: 1,
  },
  safeAreaViewContainer: {
    flex: 1,
  },
});

export default App;
// export default CodePush(CodePushOptions, onSyncStatusChange)(App);
