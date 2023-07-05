import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Verified from './../assets/icons/verified.svg';
import Ellipse from './../assets/icons/ellipse.svg';

export default ({user, icon, verified}) => {
  return (
    <View style={[styles.row, styles.flexStart, styles.p16]}>
      <View style={styles.p4}>{icon}</View>
      <View style={styles.flex1}>
        <View style={[styles.row, styles.p8]}>
          <View style={[styles.row]}>
            <Text style={[styles.text, styles.bold, styles.f14]}>
              {user.name}
            </Text>
            {verified && (
              <View style={styles.p4}>
                <Verified />
              </View>
            )}
            <Text style={[styles.text, styles.f10, styles.grey]}>1일전</Text>
          </View>
          <Ellipse />
        </View>
        <Text style={[styles.text, styles.f12, styles.p4]}>{user.comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Noto Sans',
    color: 'black',
  },
  bold: {
    fontWeight: '700',
  },
  grey: {
    color: '#919EB6',
  },
  p4: {
    padding: 4,
  },
  p8: {
    padding: 8,
  },
  p16: {
    padding: 16,
  },
  p32: {
    padding: 32,
  },
  f10: {
    fontSize: 10,
  },
  f12: {
    fontSize: 12,
  },
  f14: {
    fontSize: 14,
  },
});
