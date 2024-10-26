import React from 'react';
import {View, SafeAreaView, FlatList, Image, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

//local imports
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} from '../../Redux/CartSlice';
import styles from './Styles';
import {CartItem, EmptyComponent, Header} from '../../Components';
import useTheme from '../../Hooks/useTheme';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const theme = useTheme();

  const handleIncreaseQuantity = id => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = id => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = id => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <Header name={'Cart'} isGoBack />

        <View style={{flex: 1, marginTop: 20, paddingBottom: 100}}>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CartItem
                data={item}
                quantity={item.quantity}
                onIncrease={() => handleIncreaseQuantity(item.id)}
                onDecrease={() => handleDecreaseQuantity(item.id)}
                onRemove={() => handleRemoveItem(item.id)}
              />
            )}
            ListEmptyComponent={EmptyComponent}
          />
        </View>

        {cartItems.length > 0 && (
          <View
            style={[
              styles.totalContainer,
              {borderTopColor: theme.borderColor},
            ]}>
            <Text style={[styles.totalText, {color: theme.textColor}]}>
              Total
            </Text>
            <Text style={[styles.totalText, {color: theme.textColor}]}>
              ${totalPrice}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Cart;
