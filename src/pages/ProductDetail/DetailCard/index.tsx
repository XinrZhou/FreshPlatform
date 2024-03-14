import React, { useState, useEffect } from "react";;
import { View, Text, ScrollView } from "react-native";
import CustomStyleSheet from "/styles";
import SalePoint from "./SalePoint";
import ScaledImage from "./SacledImage";
import SalePrice from "components/SalePrice";

const DetailCard: React.JSX.Element = ({ productInfo }) => {
  const { specialSpec, genericSpec, detailImageUrl } = productInfo;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        {
          genericSpec && Object.keys(genericSpec).length > 0 && (
            <>
              <Text style={styles.title}>
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
      <View style={styles.imageContainer}>
        {
          detailImageUrl && <ScaledImage uri={detailImageUrl}/>
        }
      </View>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  infoContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
  },

  title: {
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

export default DetailCard;