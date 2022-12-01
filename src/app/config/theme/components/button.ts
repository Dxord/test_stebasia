export const Button = {
  baseStyle: {
    borderRadius: '8',
    _text: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
  },
  defaultProps: {
    p: 3,
  },
  variants: {
    link: variantLink,
  },
};

function variantLink() {
  return {
    _text: {
      fontWeight: 'bold',
    },
  };
}
