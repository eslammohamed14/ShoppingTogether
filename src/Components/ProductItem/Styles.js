import {StyleSheet, Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 280,
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 190,
  },
  image: {
    justifyContent: 'center',
    width: '100%',
    height: 190,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 40,
  },
  bottom: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  content: {
    width: '75%',
    height: '100%',
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  desc: {
    fontSize: 10,
    paddingTop: 5,
    color: '#9E9E9E',
  },
  cartContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    marginTop: 5,
  },
  cartIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
