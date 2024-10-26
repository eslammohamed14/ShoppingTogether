import React from 'react';
import {View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import useTheme from '../../Hooks/useTheme';

const SearchBar = ({searchText, setSearchText}) => {
  const theme = useTheme();

  return (
    <View style={styles.searchContainer}>
      <Image
        style={[styles.searchIcon, {tintColor: theme.imageColor}]}
        source={require('../../Assets/Images/search.png')}
      />
      <TextInput
        inputContainerStyle={{}}
        style={{width: '85%', height: '100%'}}
        value={searchText}
        onChangeText={value => setSearchText(value)}
        placeholder="Search..."
        placeholderTextColor={theme.textColor}
      />
      <TouchableOpacity onPress={() => setSearchText('')}>
        <Image
          style={[styles.closeIcon, {tintColor: theme.imageColor}]}
          source={require('../../Assets/Images/close.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
