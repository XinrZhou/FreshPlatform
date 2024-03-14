import React, { useState, useEffect } from "react";;
import { View, Text, ScrollView, Image } from "react-native";
import CustomStyleSheet from "/styles";
import SalePrice from "components/SalePrice";

const PRICE_STYLE = {
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
}

const SalePoint: React.JSX.Element = ({ specialSpec }) => {

  return (
    <View style={styles.container}>
      {
        Object.entries(specialSpec).map(([title, values], index) => (
          <>
            <View style={styles.itemWrapper} key={title}>
              <Text style={styles.value}>
                { values }
              </Text>
              <Text style={styles.title}>
                {title}
              </Text>
            </View>
            {
              index < Object.entries(specialSpec).length - 1 && <View style={styles.divider} 
            />}
          </>
        ))
      }
    </View>
  );
}

const styles = CustomStyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    padding: 8,
    borderRadius: 8,
    flexWrap: 'wrap',
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  
  itemWrapper: { 
    marginVertical: 4,
    alignItems: 'center',
  },
  
  value: {
    marginBottom: 4,
    color: '#000',
    fontWeight: "600",
    fontSize: 12,
  },

  title: {
    fontSize: 10
  },

  divider: {
    marginVertical: 6,
    height: 30, 
    width: 1, 
    backgroundColor: '#ededed',
  },
})

export default SalePoint;