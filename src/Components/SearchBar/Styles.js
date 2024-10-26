import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  searchContainer: {
    width: '95%',
    height: 70,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#9E9E9E50',
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  closeIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
  },
});

export default styles;
