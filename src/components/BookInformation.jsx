import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import lang from '../i18n/lang';

export default ({data}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.description}>
        Project By: Gurinder Kaur
        {data?.description}
      </Text>

      <View style={styles.priceDiscountRow}>
        <Text style={styles.discount}>{data?.discount}%</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>{data?.price} </Text>
          <Text style={styles.currency}>{lang.CURRENCY}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  priceDiscountRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  title: {
    fontFamily: 'Noto Sans',
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginBottom: 16,
  },
  description: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginBottom: 16,
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
