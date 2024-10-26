import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//local imports
import styles from './Styles';
import useTheme from '../../Hooks/useTheme';
import {toggleTheme} from '../../Redux/ThemeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isDarkMode = useSelector(state => state.theme.darkMode);

  return (
    <View style={styles.modeContainer}>
      <Text style={{color: theme.textColor}}>Toggle Dark Mode</Text>

      <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
        <Image
          source={
            isDarkMode
              ? require('../../Assets/Images/lightMode.png')
              : require('../../Assets/Images/darkMode.jpg')
          }
          style={styles.modeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ThemeToggle;
