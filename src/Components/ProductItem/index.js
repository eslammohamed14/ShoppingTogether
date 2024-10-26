import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import styles from './Styles';
import {addItemToCart} from '../../Redux/CartSlice';
import {darkTheme, lightTheme} from '../../Constants/Theme';
import {truncateText} from '../../Utils/String';
import {getImageURL} from '../../Utils/Images';
import useTheme from '../../Hooks/useTheme';

const ProductItem = ({data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const theme = useTheme();

  const openDetailsScreen = () => {
    navigation.navigate('ProductDetalis', {
      productID: data?.id,
    });
  };

  const handleAddToCart = () => {
    if (data) {
      dispatch(addItemToCart(data));
    }
  };

  return (
    <TouchableOpacity onPress={openDetailsScreen} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: getImageURL(data?.images?.[0])}}
          style={styles.image}
        />
      </View>

      <View style={styles.bottom}>
        <View style={styles.content}>
          <Text style={[styles.title, {color: theme.textColor}]}>
            {data?.title}
          </Text>
          <Text style={styles.desc}>{truncateText(data?.description, 6)}</Text>
        </View>
        <TouchableOpacity
          onPress={handleAddToCart}
          style={styles.cartContainer}>
          <Image
            source={require('../../Assets/Images/cart.png')}
            style={styles.cartIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
