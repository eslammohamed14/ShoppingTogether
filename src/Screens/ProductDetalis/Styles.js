import {StyleSheet, Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
    width: width - 20,
    height: 400,
    borderRadius: 12,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    marginTop: 20,
  },
  descContainer: {
    width: width - 30,
    alignItems: 'flex-start',
    marginTop: 20,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  cartContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  cartIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#9E9E9E',
    paddingTop: 15,
  },
});

export default styles;
