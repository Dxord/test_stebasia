import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  FlatList,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { RootStackNavigatorParams } from "../../../app/navigator";
import dashboard from "../../../common/_mocks_/dashboard.json";
import Media from "../../../app/assets/images/Media.png";
import Ionicons from "react-native-vector-icons/Ionicons";

type ScreenProps = NativeStackScreenProps<
  RootStackNavigatorParams,
  "AnnouncementsScreen"
>;

const AnnouncementsScreen = ({ navigation }: ScreenProps) => {
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
        bg: "white",
      }}
      _dark={{
        bg: "dark.50",
      }}
    >
      <FlatList
        data={dashboard}
        renderItem={({ item }) => (
          <Box>
            <VStack space={2} p={4}>
              <Text color="#363636" fontWeight="extrabold" fontSize="lg">
                {item.title}
              </Text>
              <HStack>
                <Text color="#787878" fontSize="xs">
                  {item.created_at}
                </Text>
                <Text color="#787878" fontSize="xs">
                  {" - " + item.time_at}
                </Text>
              </HStack>
              <Stack>
                <Image alt="Media" source={Media} />
                <Icon
                  position="absolute"
                  right={3}
                  top={3}
                  as={Ionicons}
                  size="xl"
                  name={"md-videocam"}
                  color="#fff"
                />
                <HStack
                  position="absolute"
                  space={2}
                  bottom={2}
                  alignSelf="center"
                >
                  <Box w={5} h={1.5} bg="white" borderRadius={20} />
                  <Box w={1} h={1.5} bg="coolGray.100" borderRadius={20} />
                  <Box w={1} h={1.5} bg="coolGray.100" borderRadius={20} />
                </HStack>
                <Text
                  color="white"
                  fontSize="xs"
                  position="absolute"
                  right={2}
                  bottom={2}
                >
                  1/10
                </Text>
              </Stack>
              <Text>{item.subtitle}</Text>
              <Text>{item.description} See more..</Text>
            </VStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Flex>
  );
};

export default AnnouncementsScreen;
