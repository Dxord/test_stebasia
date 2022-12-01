import { Flex, HStack, Icon, Input, Text } from "native-base";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const HeaderSearch = () => {
  return (
    <Flex
      _light={{
        bg: "white",
      }}
      _dark={{
        bg: "dark.50",
      }}
      px={4}
      py={2}
    >
      <HStack space={1} alignItems="center" justifyContent="space-between">
        <Input
          width="75%"
          leftElement={
            <Icon
              marginLeft={4}
              as={Ionicons}
              size="md"
              name={"search"}
              mr="4"
              color="#000000"
            />
          }
          fontSize="md"
          borderRadius={10}
          variant="filled"
          bgColor="#F2F3F3"
          autoCapitalize="none"
          placeholder="Search"
          value={""}
          // onChangeText={onChange}
        />
        <Icon as={Ionicons} size="xl" name={"settings-sharp"} color="#000000" />
        <Icon as={Ionicons} size="xl" name={"notifications"} color="#000000" />
      </HStack>
    </Flex>
  );
};

export default HeaderSearch;
