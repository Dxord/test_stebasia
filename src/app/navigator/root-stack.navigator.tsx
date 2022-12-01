import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { LoginScreen, SplashScreen } from "../../features/auth";
import { HomeScreen } from "../../features/home";
import RootStackNavigatorHeader from "./root-stack-navigator-header";
import { RootStackNavigatorParams } from "./root-stack-navigator-params";

const Stack = createNativeStackNavigator<RootStackNavigatorParams>();

const RootStackNavigator = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialRoute, setInitialRoute] = useState("SplashScreen");

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const dataLogin = await AsyncStorage.getItem("dataLogin");
      console.log("dataLogin navigator", dataLogin);
      if (dataLogin !== null) {
        setIsLoggedIn(true);
        navigation.navigate("HomeScreen");
      } else {
        navigation.navigate("LoginScreen");
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log("checkLogin", error);
    }
  };
  return (
    <Stack.Navigator
      screenOptions={{
        header: RootStackNavigatorHeader,
        headerStyle: {},
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      <Stack.Group>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
