import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  totalContainer: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
