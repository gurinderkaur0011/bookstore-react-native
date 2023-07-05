import React, {useState} from 'react';

//import all the components we are going to use
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import BookCard from './BookCard';
import {getBooksList} from '../apis/apis';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [isListEnd, setIsListEnd] = useState(false);
  const navigation = useNavigation();

  const getData = async refresh => {
    let skip = offset;
    let data = dataSource;
    if (refresh) {
      //Reset data
      skip = 0;
      data = [];
      setIsListEnd(false);
    } else {
      setLoading(true);
    }

    try {
      const responseJson = await getBooksList(skip, 10);
      if (responseJson.length > 0) {
        setOffset(skip + 1);
        setDataSource([...data, ...responseJson]);
      } else {
        setIsListEnd(true);
        setLoading(false);
      }
    } catch (error) {
      // Report error
    }
  };

  const renderBookCard = ({item}) => {
    return <BookCard data={item} navigation={navigation} />;
  };
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={styles.activityIndicator} />
        ) : null}
      </View>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    getData(true).then(() => {
      setRefreshing(false);
    });
  };

  return (
    <FlatList
      style={styles.list}
      data={dataSource}
      keyExtractor={(_, index) => index.toString()}
      numColumns={2}
      renderItem={renderBookCard}
      ListFooterComponent={renderFooter}
      onEndReached={() => {
        if (!isListEnd) {
          getData();
        }
      }}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl
          //refresh control used for the Pull to Refresh
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },

  activityIndicator: {
    margin: 15,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  emptyListStyle: {
    fontFamily: 'Noto Sans',
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  headerStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
});
