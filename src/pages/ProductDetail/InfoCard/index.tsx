import React, { useState, useEffect } from "react";;
import { View, Text, ScrollView } from "react-native";
import CustomStyleSheet from "/styles";
import SalePoint from "../SalePoint";
import SalePrice from "components/SalePrice";

const PRICE_STYLE = {
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
}

const InfoCard: React.JSX.Element = ({ productInfo }) => {
  const { originPrice, discountPrice, name, description, specialSpec, tags, genericSpec } = productInfo;

  return (
    <View>
      <View style={styles.introduceContainer}>
        <SalePrice  
          originPrice={originPrice} 
          discountPrice={discountPrice}
          styleProps={PRICE_STYLE}
        />
        <Text style={styles.title}>
          {name}
        </Text>
        {
          specialSpec && Object.keys(specialSpec).length > 0 && <SalePoint specialSpec={specialSpec} />
        }
        <View style={styles.tagContainer}>
          {
            tags?.length > 0 && (
              <Text style={styles.itemTag}>{tags.join(' | ')}</Text>
            )
          }
        </View>
        {
          description && (
            <Text style={styles.description}>
              {description}
            </Text>
          )
        }
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailCard}>
          {
            genericSpec && Object.keys(genericSpec).length > 0 && (
              <>
                <Text style={styles.detailTitle}>
                  详情
                </Text>
                <View style={styles.genericSpec}>
                  {
                    Object.entries(genericSpec).map(([title, values], index) => (
                      <View style={styles.specWrapper} key={title}>
                        <Text style={styles.specKey}>
                          { title }
                        </Text>
                        <Text style={styles.specValue}>
                          { values }
                        </Text>
                      </View>
                    ))
                  }
                </View>
              </>
            )
          }
        </View>
      </View>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  introduceContainer: {
    marginTop: 10,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    display: "flex",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },

  description: {
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

  detailContainer: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  detailCard: {
    marginHorizontal: 16,
    marginVertical: 10,
  },

  detailTitle: {
    marginLeft: 12,
    marginBottom: 10,
    color: '#000',
    fontSize: 10,
    fontWeight: '600'
  },

  genericSpec: {
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },

  specWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  specKey: {
    width: 80,
    fontSize: 10,
  },

  specValue: {
    color: '#000',
    fontSize: 10,
  }
})

export default InfoCard;