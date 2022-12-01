import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Flex, Text } from "native-base";
import React, { useState } from "react";
import { RootStackNavigatorParams } from "../../../app/navigator";

type ScreenProps = NativeStackScreenProps<
  RootStackNavigatorParams,
  "RentalSalesScreen"
>;

const RentalSalesScreen = ({ navigation }: ScreenProps) => {
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
      <Text>RentalSales Screen</Text>
    </Flex>
  );
};

export default RentalSalesScreen;
