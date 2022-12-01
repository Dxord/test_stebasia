import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Flex, Text } from "native-base";
import React, { useState } from "react";
import { RootStackNavigatorParams } from "../../app/navigator";
import HomeTabMenu from "./home.tab-menu";

type ScreenProps = NativeStackScreenProps<
  RootStackNavigatorParams,
  "HomeScreen"
>;

const HomeScreen = ({ navigation }: ScreenProps) => {
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = fetching();

      return;
    }, [])
  );
  const fetching = async () => {};

  return (
    <Flex
      h={{
        base: "100%",
      }}
      _light={{
        bg: "coolGray.100",
      }}
      _dark={{
        bg: "dark.50",
      }}
    >
      <HomeTabMenu />
    </Flex>
  );
};

export default HomeScreen;
