import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

//local imports
import styles from './Styles';
import {truncateText} from '../../Utils/String';
import {getImageURL} from '../../Utils/Images';
import useTheme from '../../Hooks/useTheme';

const CartItem = ({data, onIncrease, onDecrease, onRemove, quantity}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: getImageURL(data?.images?.[0])}}
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, {color: theme.textColor}]}>
          ${data?.price}
        </Text>
        <Text style={[styles.title, {color: theme.textColor}]}>
          {truncateText(data?.title, 4)}
        </Text>
        <Text style={styles.desc}>{truncateText(data?.description, 5)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={quantity === 1 ? onRemove : onDecrease}
          style={[styles.quantityButtonContainer, styles.minus]}>
          <Image
            source={
              quantity === 1
                ? require('../../Assets/Images/delete.png')
                : require('../../Assets/Images/minus.png')
            }
            style={[styles.quantityButton, quantity === 1 && styles.deleteIcon]}
          />
        </TouchableOpacity>

        <Text style={[styles.quantity, {color: theme.textColor}]}>
          {quantity}
        </Text>
        <TouchableOpacity
          onPress={onIncrease}
          style={[styles.quantityButtonContainer, styles.plus]}>
          <Image
            source={require('../../Assets/Images/plus.png')}
            style={styles.quantityButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
