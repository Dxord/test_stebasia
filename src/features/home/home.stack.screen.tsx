import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Flex, Text, View } from "native-base";
import React, { useState } from "react";
import { RootStackNavigatorParams } from "../../app/navigator";
import HeaderSearch from "../../common/components/header/header.search.component";
import HomeTabTop from "./home.tab-top";

type ScreenProps = NativeStackScreenProps<
  RootStackNavigatorParams,
  "HomeStackScreen"
>;

const HomeStackScreen = ({ navigation }: ScreenProps) => {
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = fetching();

      return;
    }, [])
  );
  const fetching = async () => {};

  return (
    <View flex={1}>
      <HeaderSearch />
      <HomeTabTop />
    </View>
  );
};

export default HomeStackScreen;
