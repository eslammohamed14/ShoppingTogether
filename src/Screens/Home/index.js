import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';

//local imports
import styles from './Styles';
import ApiService from '../../Services/ApiService';
import {Header, SearchBar} from '../../Components';
import useTheme from '../../Hooks/useTheme';
import ThemeToggle from '../../Components/ThemeToggle';
import ProductList from '../../Components/ProductList';

const Home = () => {
  const theme = useTheme();

  const [searchText, setSearchText] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const fetchData = async (reset = false) => {
    try {
      if (reset) setOffset(0);
      setIsLoading(true);

      const response = await ApiService.getProductsList(
        searchText,
        reset,
        offset,
        limit,
      );

      const newData = response?.data || [];
      setDataList(prevData => (reset ? newData : [...prevData, ...newData]));

      if (!reset) setOffset(offset + limit);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(true);
  }, [searchText]);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <Header name={'Home'} isCartVisable />

        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ThemeToggle />

        <ProductList
          data={dataList}
          isLoading={isLoading}
          fetchData={fetchData}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
