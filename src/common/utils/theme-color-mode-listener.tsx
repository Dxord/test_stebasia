import {useColorMode} from 'native-base';
import {useEffect} from 'react';
import {Appearance, View} from 'react-native';

const ThemeColorModeListener = () => {
  const {setColorMode, toggleColorMode} = useColorMode();

  useEffect(() => {
    const systemColorScheme = Appearance.getColorScheme();
    setColorMode(systemColorScheme);

    const changeSubscription = Appearance.addChangeListener(({colorScheme}) => {
      setColorMode(colorScheme);
    });

    return () => changeSubscription.remove();
  }, [setColorMode, toggleColorMode]);

  return <View />;
};

export default ThemeColorModeListener;
