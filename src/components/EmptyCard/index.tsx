import React from "react";
import { Text, View } from "react-native";
import CustomStyleSheet from "styles";
import { Icon } from "assets/fonts";


const EmptyCard: React.JSX.Element = () => {
  return (
    <View style={styles.container}>
      <Icon name="icon-konggouwuche" size={160} color="#ccc" />
      <Text style={styles.title}>购物车为空</Text>
      <Text style={styles.tips}>"空即是饿，饿即是空"</Text>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  container: {
    height: 260,
    marginHorizontal: 18,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginTop: 12,
    fontSize: 14,
    color: '#000'
  },
  tips: {
    marginTop: 8,
    fontSize: 10,
    color: '#999'
  }
})

export default EmptyCard;