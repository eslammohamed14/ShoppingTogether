import {StyleSheet, Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 100,
    marginBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '100%',
  },
  image: {
    justifyContent: 'center',
    width: '100%',
    height: 90,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  content: {
    height: 100,
    width: '40%',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 10,
    color: '#9E9E9E',
  },
  quantityContainer: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  quantityButtonContainer: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    backgroundColor: '#495057',
  },
  minus: {
    backgroundColor: '#F5F5F5',
  },
  quantity: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#212429',
  },
  quantityButton: {
    width: 8,
    height: 8,
    resizeMode: 'contain',
  },
  deleteIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: 'black',
  },
});

export default styles;
