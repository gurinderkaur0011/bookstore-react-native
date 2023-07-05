import React from 'react';
import {View, StyleSheet} from 'react-native';

import BookList from '../components/BookList';

export default () => {
  return (
    <View style={styles.mainViewContainer}>
      <BookList />
    </View>
  );
};
const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
  },
});
