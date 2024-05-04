import React, { useState, useEffect, useRef } from "react";
import { ScrollView, Image, Text, View, StyleSheet, Pressable } from "react-native";
import CustomStyleSheet from "styles";
import { TAB_LIST } from "constants";

const ScrollTab: React.FC = ({ 
  activeIndex = -1,
  handleIndexChange = () => {}, 
}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <ScrollView 
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentWrapper}
    >
      {
        TAB_LIST.map((item, index) => {
          return (
            <Pressable 
              key={index} 
              onPress={() => handleIndexChange(item.value)}
            >
              <View style={styles.navItemWrapper}>
                <Text style={[
                  styles.navItemText,
                  item.value === activeIndex && styles.navItemActiveText
                ]}>
                  { item.name }
                </Text>
                <View style={
                  item.value === activeIndex &&  styles.bottomLine
                }/>
              </View>
            </Pressable>
          )
        })
      }
    </ScrollView>
  )
}

const styles = CustomStyleSheet.create({
  contentWrapper: {
    marginHorizontal: 12,
    marginVertical: 16,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItemWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemText: {
    fontSize: 12,
    color: '#000',
  },
  navItemActiveText: {
    fontSize: 13,
    color: '#1eade8',
  },
  bottomLine: {
    marginTop: 2,
    height: 2,
    width: 24,
    backgroundColor: '#06b0f9',
    borderRadius: 6,
  }
});

export default ScrollTab;
