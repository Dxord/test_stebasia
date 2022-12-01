import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AccountScreen from "../account/account.screen";
import DamageScreen from "../damage/damage.screen";
import DocumentScreen from "../document/document.screen";
import { MessageScreen } from "../message";
import HomeStackScreen from "./home.stack.screen";

const Tab = createBottomTabNavigator();

export default function HomeTabMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Message") {
            iconName = focused ? "ios-mail" : "ios-mail-outline";
          } else if (route.name === "Damage") {
            iconName = focused ? "ios-hammer" : "ios-hammer-outline";
          } else if (route.name === "Document") {
            iconName = focused ? "document" : "document-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#00A79D",
        tabBarInactiveTintColor: "#000000",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Damage" component={DamageScreen} />
      <Tab.Screen name="Document" component={DocumentScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
