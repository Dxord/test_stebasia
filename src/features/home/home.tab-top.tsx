import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "native-base";
import AnnouncementsScreen from "./tab/Announcements.screen";
import ParkingScreen from "./tab/Parking.screen";
import RentalSalesScreen from "./tab/RentalSales";
const Tab = createMaterialTopTabNavigator();

export default function HomeTabTop() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 12,
          color: "#00A79D",
          textTransform: "capitalize",
        },
        tabBarActiveTintColor: "#00A79D",
      })}
    >
      <Tab.Screen
        options={{ tabBarLabel: "Announcements" }}
        name="Announcements"
        component={AnnouncementsScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Parking" }}
        name="Parking"
        component={ParkingScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Rental/Sales" }}
        name="Rental/Sales"
        component={RentalSalesScreen}
      />
    </Tab.Navigator>
  );
}
