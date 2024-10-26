import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

//local imports
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import useTheme from '../../Hooks/useTheme';

const Header = ({name, isGoBack, isCartVisable}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const cartItemCount = useSelector(state => state.cart.items.length);

  return (
    <View style={styles.container}>
      {isGoBack ? (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <Image
            style={[styles.image, {tintColor: theme.imageColor}]}
            source={require('../../Assets/Images/backArrow.png')}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: theme.textColor}]}>{name}</Text>
      </View>
      {isCartVisable ? (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Cart')}>
          <Image
            style={[styles.image, {tintColor: theme.imageColor}]}
            source={require('../../Assets/Images/cart.png')}
          />
          {cartItemCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}
    </View>
  );
};

export default Header;
