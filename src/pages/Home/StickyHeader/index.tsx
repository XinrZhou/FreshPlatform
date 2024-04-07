import React, { useState, useEffect } from 'react';
import { Animated, View } from 'react-native';
import CustomStyleSheet from 'styles';
import SearchBar from '../SearchBar';
import LocationSelector from "components/LocationSelector";

const StickyHeader = ({ 
  stickyTopY = null, 
  stickyScrollY, 
  isScroll,
  themeColor = '' 
}) => {
  const [stickyLayoutY, setStickyLayoutY] = useState(null);

  useEffect(() => {
    const onLayout = event => {
      setStickyLayoutY(event.nativeEvent.layout.y);
    };

    return () => {};
  }, []);

  const y = stickyTopY !== null ? stickyTopY : stickyLayoutY;

  const translateY = stickyScrollY.interpolate({
    inputRange: [-1, 0, y, y + 1],
    outputRange: [0, 0, 0, 1],
    useNativeDriver: true,
  });

  return (
    <Animated.View
      style={[
        styles.stickyContainer,
        isScroll && styles.scrollContainer,
        { 
          transform: [{ translateY }], 
          backgroundColor: isScroll ? themeColor : 'transparent' 
        }
      ]}
    >
      {/* 位置 */}
      <View style={styles.locationContainer}>
        <LocationSelector />
      </View>
      {/* 搜索框 */}
      <SearchBar isScroll={isScroll} themeColor={themeColor} />
    </Animated.View>
  );
};

export default React.memo(StickyHeader);

const styles = CustomStyleSheet.create({
  stickyContainer: {
    zIndex: 100,
  },
  scrollContainer: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: 10,
  },
});
