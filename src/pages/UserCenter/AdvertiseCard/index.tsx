import React from "react";
import { View, Text, Image } from "react-native";
import CustomStyleSheet from "styles";

const AdvertiseCard: React.JSX.Element = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
          source={{
            uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/0145df5b2213a8a80121bbecd524aa.jpg%402o.jpg'
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
    height: 56,
    borderRadius: 16,
  },
});

export default AdvertiseCard;