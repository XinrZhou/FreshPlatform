import React, { useState, useEffect } from "react";;
import { View, Text, ScrollView } from "react-native";
import CustomStyleSheet from "/styles";
import SalePoint from "./SalePoint";
import SalePrice from "components/SalePrice";

const PRICE_STYLE = {
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
}

const InfoCard: React.JSX.Element = ({ 
  productInfo = {}, 
  selectedSku = {} 
}) => {
  const { name, description, specialSpec, tags } = productInfo;
  const { originPrice, discountPrice } = selectedSku;

  return (
    <View style={styles.introduceContainer}>
      <SalePrice  
        originPrice={originPrice} 
        discountPrice={discountPrice}
        styleProps={PRICE_STYLE}
      />
      <Text style={styles.title}>
        {name} {selectedSku.name}
      </Text>
      {
        specialSpec && Object.keys(specialSpec).length > 0 && (
          <View>
            <SalePoint specialSpec={specialSpec} />
          </View>
        )
      }
      {
        tags?.length > 0 && (
          <View style={styles.tagContainer}>
            <Text style={styles.itemTag}>
              {tags.join(' | ')}
            </Text>
          </View>
        )
      }
      {
        description && (
          <Text style={styles.description}>
            {description}
          </Text>
        )
      }
    </View>
  );
}

const styles = CustomStyleSheet.create({
  introduceContainer: {
    marginTop: 12,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    display: "flex",
    flexWrap: 'wrap',
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  
  title: {
    width: '100%',
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },

  description: {
    width: '100%',
    fontSize: 12,
  },

  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  itemTag: {
    marginRight: 4,
    color: '#999',
  },
})

export default InfoCard;