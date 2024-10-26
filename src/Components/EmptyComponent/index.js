import React from 'react';
import {View, Image} from 'react-native';

//local imports
import styles from './Styles';

const EmptComponent = () => {
  return (
    <View style={styles.cartEmpty}>
      <Image
        source={require('../../Assets/Images/cartEmpty.png')}
        style={styles.cartEmptyIcon}
      />
    </View>
  );
};

export default EmptComponent;
