import React from "react";
import { View, Text, Pressable } from "react-native";
import CustomStyleSheet from "styles";
import { Icon } from 'assets/fonts';

const IconItem = ({title, iconName, color}) => {
  return (
    <View style={styles.itemWrapper}>
      <Icon 
        size={24} 
        color={color}
        name={iconName}
      />
      <Text style={styles.itemTitle}>
        {title}
      </Text>
    </View>
  )
}

const OperationCard: React.JSX.Element = ({ 
  operationList = [],
  operationType = '', 
  onItemPress = () => {},
}) => {
  return (
    <View style={styles.cardContainer}>
      {
        operationList?.map((item, index) => {
          return (
            <Pressable
              key={index}  
              onPress={() => onItemPress(index)}
            >
              <IconItem 
                {...item} 
                color={"#000"}
              />
            </Pressable>
          )
        })
      }
    </View>
  )
};

const styles = CustomStyleSheet.create({
  cardContainer: {
    marginTop: 12,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  itemWrapper: {
    marginVertical: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemTitle: {
    marginTop: 2,
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
    color: '#000',
  }
});

export default OperationCard;