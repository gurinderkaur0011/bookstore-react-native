import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import lang from '../i18n/lang';

const BookCard = ({data, navigation}) => {
  const navigateToDetailsScreen = () => {
    navigation.push('Details', data);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={navigateToDetailsScreen}>
      <Image
        defaultSource={require('../assets/images/placeholder.jpg')}
        source={
          !data?.image
            ? require('../assets/images/placeholder.jpg')
            : {
                uri: data?.image,
              }
        }
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{data?.title}</Text>
        <View style={styles.priceDiscountRow}>
          <Text style={styles.discount}>{data?.discount}%</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{data?.price} </Text>
            <Text style={styles.currency}>{lang.CURRENCY}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
  },
  priceDiscountRow: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  priceRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  details: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  image: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  currency: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  discount: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '700',
    color: 'red',
  },
  price: {
    fontFamily: 'Noto Sans',
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
});

export default BookCard;
