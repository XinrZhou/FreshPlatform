import React, { useRef } from 'react';
import { Animated } from 'react-native';
import CustomStyleSheet from 'styles';
import SearchBar from '../SearchBar';

const StickyHeader = ({ 
  stickyTopY = 0, 
  stickyScrollY, 
  isScroll = false, 
  themeColor = '',
}) => {
  const stickyLayoutY = useRef(0);

  const onLayout = event => {
    stickyLayoutY.current = event.nativeEvent.layout.y;
  };

  const translateY = stickyScrollY.interpolate({
    inputRange: [0, stickyLayoutY.current + 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        styles.stickyContainer,
        {
          transform: [{ translateY }],
          zIndex: translateY.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 2],
            extrapolate: 'clamp',
          }),
        },
      ]}
    >
      <SearchBar 
        isScroll={isScroll} 
        themeColor={themeColor} 
      />
    </Animated.View>
  );
};

export default React.memo(StickyHeader);

const styles = CustomStyleSheet.create({
  stickyContainer: {
    zIndex: 10,
    elevation: 1, // Android 中提高层级
  },
});
