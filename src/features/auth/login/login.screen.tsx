import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Heading, ScrollView, useColorModeValue, VStack } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { RootStackNavigatorParams } from "../../../app/navigator";
import LoginForm from "./login-form";

type ScreenProps = NativeStackScreenProps<
  RootStackNavigatorParams,
  "LoginScreen"
>;

const LoginScreen = ({ navigation }: ScreenProps) => {
  return (
    <ScrollView
      _light={{
        bg: "white",
      }}
      _dark={{
        bg: "dark.50",
      }}
      contentContainerStyle={styles.container}
      h={{
        base: "100%",
      }}
      flex={1}
    >
      <VStack p={5} space={3}>
        <VStack space={3}>
          <VStack mx={3} mt={24}>
            <Heading
              fontSize="2xl"
              color={useColorModeValue("#363636", "#363636")}
              fontWeight="black"
              textAlign="center"
            >
              Welcome back!
            </Heading>
            <Heading
              fontSize="md"
              color={useColorModeValue("#787878", "#787878")}
              fontWeight={400}
              textAlign="center"
            >
              Login to your account
            </Heading>
          </VStack>
        </VStack>
        <LoginForm />
      </VStack>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    width: "100%",
  },
});
