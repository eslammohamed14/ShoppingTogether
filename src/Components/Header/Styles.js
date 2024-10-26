import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: Platform.OS == 'android' ? 15 : 0,
  },
  icon: {
    width: '10%',
  },
  arrowContainer: {
    width: 40,
    height: 40,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  titleContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: 10,
    backgroundColor: '#495057',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default styles;
