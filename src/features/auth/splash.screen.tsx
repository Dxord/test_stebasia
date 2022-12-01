import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  Center,
  PresenceTransition,
  StatusBar,
  useColorModeValue,
  VStack,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { theme } from "../../app/config";
import { RootStackNavigatorParams } from "../../app/navigator";
type ScreenProps = NativeStackScreenProps<
  RootStackNavigatorParams,
  "SplashScreen"
>;

const SplashScreen = ({ navigation }: ScreenProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const fetching = async () => {};

  useEffect(() => {
    fetching();
  }, []);

  return (
    <Center
      flex={1}
      p="5"
      alignItems="center"
      _light={{
        bg: "white",
      }}
      _dark={{
        bg: "primary.900",
      }}
    >
      <StatusBar
        backgroundColor={useColorModeValue(
          theme.colors.primary[50],
          theme.colors.primary[900]
        )}
        barStyle={useColorModeValue("dark-content", "light-content")}
      />
      <VStack position="absolute" top={0} left={0} right={0} bottom={0}>
        <Box bgColor="white" />
      </VStack>
      <PresenceTransition
        visible={true}
        initial={{
          opacity: 0.4,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1000,
          },
        }}
      >
        <Text>Splash Screen</Text>
      </PresenceTransition>
    </Center>
  );
};

export default SplashScreen;
