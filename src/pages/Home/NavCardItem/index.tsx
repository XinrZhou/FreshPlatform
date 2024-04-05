import React, {useState} from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Category } from "types/type";
import CustomStyleSheet from "styles";

const NavCardItem: React.JSX.Element = ({
  navItem,
  handleNavItemClick = () => {}
}) => {

  return (
    <Pressable onPress={() => handleNavItemClick(navItem)}>
      <View 
        key={navItem.id} 
        style={styles.navItemWrapper}
      >
        <Image
          source={{
            uri: navItem.imageUrl
          }}
          style={styles.navItemImage} 
        />
        <Text style={styles.navItemText}>
          {navItem.name}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = CustomStyleSheet.create({
  navItemWrapper: {
    marginVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navItemImage: {
    width: 40,
    height: 40,
    borderRadius: 26,
  },

  navItemText: {
    paddingHorizontal: 10,
    marginTop: 4,
    fontSize: 10,
    color: '#000',
    borderRadius: 16,
  },
})

export default NavCardItem;