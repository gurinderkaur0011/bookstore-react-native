import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import BookInformation from '../components/BookInformation';
import CommentsSection from '../components/CommentsSection';

const images = [
  'https://static.toiimg.com/thumb/87137149.cms?width=680&height=512&imgsize=38230',
  'https://static.toiimg.com/thumb/87137147.cms?width=680&height=512&imgsize=50352',
  'https://static.toiimg.com/thumb/87137145.cms?width=680&height=512&imgsize=46262',
];
const {width} = Dimensions.get('screen');

export default ({route}) => {
  const data = route?.params;
  const [activeSlide, setActiveSlide] = useState(0);

  const handleActiveSlide = index => setActiveSlide(index);

  const renderItem = ({item}) => {
    return (
      <ImageBackground
        source={{uri: item}}
        style={styles.image}
        size={{height: 2340, width: 1080}}
      />
    );
  };

  return (
    <ScrollView>
      <View style={styles.content}>
        <Carousel
          data={[data?.image, ...images]}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={handleActiveSlide}
        />
        <Pagination
          dotsLength={4}
          activeDotIndex={activeSlide}
          containerStyle={styles.dotContainer}
          inactiveDotOpacity={0.2}
          inactiveDotScale={1}
          dotStyle={styles.dot}
        />
      </View>
      <BookInformation data={data} />
      <CommentsSection />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  content: {
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 0.75,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  dot: {
    backgroundColor: 'white',
  },
});
