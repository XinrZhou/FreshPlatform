import React, { useState, useEffect } from "react";;
import { View, Text, ScrollView } from "react-native";
import { Sku } from "types/type";
import CustomStyleSheet from "/styles";
import SalePoint from "./SalePoint";
import SalePrice from "components/SalePrice";

const TITLE = "陪你一起，烹鲜美午餐，享四级美食";

const ServiceCard: React.JSX.Element = ({ skuList = [] }) => {
  const [selectedSku, setSelectedSku] = useState<Sku>({});

  useEffect(() => {
    skuList.forEach(item => {
      item.isDefault && setSelectedSku(item);
    })
    console.log("selectedSku", selectedSku);
  }, [skuList])

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>
         { TITLE }
        </Text>
      </View>
      <View style={styles.serviceWrapper}>
        <View style={styles.itemWrapper}>
          <Text>选择</Text>
          <Text>已选: </Text>
        </View>
      </View>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 16,
    paddingVertical: 10,
  },
  headerWrapper: {
    paddingTop: 4,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#00aefd'
  },
  title: {
    fontSize: 10,
    color: '#fff',
  },
  serviceWrapper: {
    marginTop: -12,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff'
  },
  itemWrapper: {
    flexDirection: 'row',
    gap: 8,
  }
})

export default ServiceCard;