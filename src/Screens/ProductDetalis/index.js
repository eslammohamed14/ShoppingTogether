import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//local imports
import ApiService from '../../Services/ApiService';
import styles from './Styles';
import {Header} from '../../Components';
import {addItemToCart} from '../../Redux/CartSlice';
import useTheme from '../../Hooks/useTheme';

const ProductDetalis = ({route}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [details, setDetails] = useState(null);

  const fetchResturantDetails = id => {
    ApiService.getProductInfo(id).then(res => {
      setDetails(res?.data);
    });
  };

  useEffect(() => {
    fetchResturantDetails(route?.params?.productID);
  }, [route?.params?.productID]);

  const handleAddToCart = () => {
    if (details) {
      dispatch(addItemToCart(details));
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Header name={details?.title} isGoBack isCartVisable />
      <ScrollView style={{flex: 1}}>
        <Image source={{uri: details?.images?.[0]}} style={styles.image} />
        <View style={styles.descContainer}>
          <View style={styles.row}>
            <Text style={[styles.price, {color: theme.textColor}]}>
              ${details?.price}
            </Text>
            <TouchableOpacity
              onPress={handleAddToCart}
              style={styles.cartContainer}>
              <Image
                source={require('../../Assets/Images/cart.png')}
                style={styles.cartIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{details?.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetalis;
