import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import ImageButton from './../assets/icons/imagesmode.svg';

export default () => {
  return (
    <View style={styles.row}>
      <ImageButton />
      <View style={styles.flex1}>
        <Text style={styles.typeMsg}>댓글을 남겨주세요.</Text>
      </View>
      <Pressable>
        <Text style={styles.send}>등록</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    marginLeft: 8,
  },
  send: {
    fontWeight: '500',
    color: '#919EB6',
    fontFamily: 'Noto Sans',
  },
  typeMsg: {
    fontWeight: '400',
    color: '#AFB9CA',
    fontFamily: 'Noto Sans',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingVertical: 8,
  },
});
