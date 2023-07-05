import React from 'react';
import {View, StyleSheet} from 'react-native';
import User1 from './../assets/icons/user1.svg';
import User2 from './../assets/icons/user2.svg';
import UserComment from './UserComment';
import InputMessage from './InputMessage';

const userData = [
  {
    name: '안녕 나 응애',
    comment:
      '어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!',
  },
  {
    name: 'ㅇㅅㅇ',
    comment: '오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다',
  },
];

export default () => {
  return (
    <>
      <View style={styles.separator} />
      <UserComment user={userData[0]} verified={true} icon={<User1 />} />
      <View style={styles.userReply}>
        <UserComment user={userData[1]} verified={false} icon={<User2 />} />
      </View>
      <View style={styles.separator} />
      <InputMessage />
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  userReply: {
    paddingLeft: 32,
    marginTop: -24,
  },
});
