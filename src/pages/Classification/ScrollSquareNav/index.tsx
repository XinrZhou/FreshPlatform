import React, {useState} from "react";
import { 
  ScrollView,
  Image,
  Text,
  View,
  Pressable
 } from "react-native";
 import CustomStyleSheet from "styles";
 import { Category } from "../../types/type";

const ScrollSquareNav: React.JSX.Element = ({
  navList = [],
  navIndex = 0,
  setNavIndex = () => {},
  handleNavIndexChange = () => {},
}) => {

  const onNavIndexChange = (index: number, item: Category) => {
    setNavIndex(index);
    handleNavIndexChange(index, item)
  }

  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollWrapper}
    >
      {
        navList.map((item, index) => {
          return (
            <Pressable
              key={item.id}
              style={[
                styles.navButton,
                index === navIndex && styles.navActiveButton
              ]}
              onPress={() => onNavIndexChange(index, item)} 
            >
              <Text
                style={[
                  styles.navText,
                  index === navIndex && styles.navActiveText
                ]} 
              >
                {item.name}
              </Text>
            </Pressable>
          )
        })
      }
    </ScrollView>
  )
}

const styles = CustomStyleSheet.create({
  scrollWrapper: {
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  navButton: {
    height: 20,
    marginHorizontal: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
  },
  navActiveButton: {
    backgroundColor: '#E5F6FE',
  },
  navText: {
    fontSize: 10,
    lineHeight: 20,
  },
  navActiveText: {
    color: '#17A3D4'
  }
})

export default ScrollSquareNav;