import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Heading, HStack, Icon, Pressable, VStack} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../config';

const RootStackNavigatorHeader = (props: NativeStackHeaderProps) => {
  const title = props.options.title;

  return (
    <VStack py="2" px={6} bgColor="transparent" alignItems="flex-start">
      {props.navigation.canGoBack() && (
        <Pressable
          _pressed={{
            bg: 'rgba(255,255,255,0.2)',
          }}
          _light={{
            bg: 'white',
          }}
          _dark={{
            bg: 'dark.50',
          }}
          rounded="full"
          onPress={props.navigation.goBack}
          p={2}>
          <Icon
            as={MaterialCommunityIcons}
            name="arrow-left"
            size={7}
            color="white"
          />
        </Pressable>
      )}
    </VStack>
  );
};

export default RootStackNavigatorHeader;
