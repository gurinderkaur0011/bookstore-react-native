import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import BackArrow from '../../assets/icons/back.svg';

export default ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Pressable style={styles.backButton} onPress={navigation.goBack}>
          <BackArrow />
        </Pressable>
        <Text style={styles.headerText}>{route.params.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: 60, backgroundColor: 'white'},
  subcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {fontWeight: '700', color: 'black', fontSize: 18},
  backButton: {
    position: 'absolute',
    left: 8,
  },
});
