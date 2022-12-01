import {Box, Heading, Text, Toast} from 'native-base';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
export const notificationToast = (title: string, body: String) => {
  return Toast.show({
    placement: 'top',
    render: () => {
      return (
        <Box
          shadow={4}
          alignSelf="center"
          // marginTop={-10}
          bg="white"
          minHeight={12}
          minWidth={width - 8}
          borderRadius={8}
          px="4"
          py="2">
          <Heading fontSize="xs">{title}</Heading>
          <Text>{body}</Text>
        </Box>
      );
    },
  });
};
export const errorToast = (desc: String) => {
  return Toast.show({
    title: 'Error',
    description: desc,
    bg: 'red.600',
    w: 350,
    duration: 2000,
  });
};
export const successToast = (desc: String) => {
  return Toast.show({
    title: 'Success',
    description: desc,
    bg: 'green.600',
    w: 350,
    duration: 2000,
  });
};
export const warningToast = (desc: String) => {
  return Toast.show({
    title: 'Warning',
    description: desc,
    bg: 'orange.600',
    w: 350,
    duration: 2000,
  });
};

export const infoToast = (desc: String) => {
  return Toast.show({
    title: 'Info',
    description: desc,
    bg: 'blue.600',
    w: 350,
    duration: 2000,
  });
};
