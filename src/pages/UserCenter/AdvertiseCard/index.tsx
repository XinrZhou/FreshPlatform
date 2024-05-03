import React from "react";
import { View, Text, Image } from "react-native";
import CustomStyleSheet from "styles";

const AdvertiseCard: React.JSX.Element = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
          source={{
            uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/20240503093328.jpg'
          }} 
          style={styles.cardImage}
        />
    </View>
  )
};

const styles = CustomStyleSheet.create({
  cardContainer: {
    marginTop: 8,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  cardImage: {
    width: '100%',
    objectFit: 'fill',
    height: 80,
    borderRadius: 16,
  },
});

export default AdvertiseCard;