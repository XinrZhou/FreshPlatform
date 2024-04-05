import React, { useState, useEffect, useRef } from "react";
import { ScrollView, Image, Text, View, StyleSheet, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Category } from "../../types/type";

const ScrollNavBar: React.FC = ({ 
  navList = [], 
  currentNavItem = {}, 
  handleNavIndexChange 
}) => {
  const [navActiveIndex, setNavActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    setNavActiveIndex(0);
  }, [])

  useEffect(() => {
    navList.forEach((item, index) => {
      if (item.id === currentNavItem.id) {
        setNavActiveIndex(index);
        onNavIndexChange(index, currentNavItem);
      }
    })
  }, [currentNavItem]);

  const onNavIndexChange = (index: number, item: Category) => {
    setNavActiveIndex(index);
    handleNavIndexChange(index, item.id);
    scrollToNavItem(index);
  };

  // 一级导航跟随index滚动
  const scrollToNavItem = (index: number) => {
    const itemWidth = 60; 
    const offset = index * itemWidth;
    scrollViewRef.current?.scrollTo({ x: offset, animated: true });
  };

  return (
    <ScrollView 
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentWrapper}
    >
      {
        navList.map((item, index) => {
          return (
            <Pressable 
              key={item.id} 
              onPress={() => onNavIndexChange(index, item)}
            >
              <View 
                style={styles.navItemWrapper}
              >
                <Image
                  source={{
                    uri: item.imageUrl
                  }}
                  style={[
                    styles.navItemImage,
                    index === navActiveIndex && {borderColor: '#08B1FE'}
                  ]} 
                />
                {
                  index === navActiveIndex ?
                  <LinearGradient
                    start={{ x: 0, y: 0 }} 
                    end={{ x: 1, y: 0 }}
                    colors={['#61C7E0', '#08B1FE']}
                    style={styles.navItemText}
                  >
                    <Text style={{color: '#fff'}}>
                      {item.name}
                    </Text>
                  </LinearGradient> :
                  <Text style={styles.navItemText}>
                    {item.name}
                  </Text>
                }
              </View>
            </Pressable>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 8,
  },
  navItemWrapper: {
    marginVertical: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  navItemText: {
    paddingHorizontal: 10,
    marginTop: 6,
    color: '#000',
    borderRadius: 16,
  },
});

export default ScrollNavBar;
