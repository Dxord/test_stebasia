import {themeTools} from 'native-base';

export const Input = {
  baseStyle: (props: any) => ({
    color: themeTools.mode('gray.800', 'gray.200')(props),
    bg: 'light.50',
    radius: 2,
  }),
  defaultProps: {
    p: 2.5,
    _focus: {
      fontWeight: 'semibold',
      bg: 'white',
      borderColor: 'darkBlue.500',
    },
  },
};
