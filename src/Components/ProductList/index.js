import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

//local imports
import styles from './Styles';
import {ProductItem} from '../../Components';

const ProductList = ({data, isLoading, fetchData}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData(true).finally(() => setIsRefreshing(false));
  };

  const handleLoadMore = () => {
    if (!isLoading) {
      fetchData();
    }
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => <ProductItem data={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading && <ActivityIndicator size="large" color={'#0000ff'} />
        }
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

export default ProductList;
