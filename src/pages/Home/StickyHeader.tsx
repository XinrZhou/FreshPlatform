import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import {useRef} from 'react';
import { Text } from 'react-native-animatable';
import SearchBar from '../../components/SearchBar';

const StickyHeader: React.JSX.Element = ({
  stickyTopY = null,
  stickyScrollY,
  isScroll = false
}) => {
  let stickyLayoutY = useRef(0).current;
  const y = stickyScrollY !== null ? stickyTopY : stickyLayoutY;

  const onLayout = event => {
    stickyLayoutY = event.nativeEvent.layout.y;
  };

  return (
    <Animated.View
      onLayout={onLayout} 
      style={[
        styles.stickyContainer,
        {
          transform: [
            {
              translateY: stickyScrollY.interpolate({
                inputRange: [-1, 0, y, y + 1],
                outputRange: [0, 0, 0, 1],
              }),
            },
          ],
        },
      ]}>
      <SearchBar isScroll={isScroll} />
    </Animated.View>
  );
};

export default React.memo(StickyHeader);

const styles = StyleSheet.create({
  stickyContainer: {
    zIndex: 10,
  },
});


