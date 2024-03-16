import React, { useState, useEffect } from "react";;
import { View, Text, ScrollView, Pressable, Modal, TouchableOpacity } from "react-native";
import { Sku } from "types/type";
import { Icon } from "assets/fonts";
import CustomStyleSheet from "/styles";
import SalePoint from "./SalePoint";
import SalePrice from "components/SalePrice";
import SkuModal from "./SkuModal";

const TITLE = "陪你一起，烹鲜美午餐，享四级美食";

const ServiceCard: React.JSX.Element = ({ 
  skuList = [],
  selectedSku = {},
  onSelectedSkuChange = () => {}
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const selectSku = (sku: Sku) => {
    setSelectedSku(sku);
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>
         { TITLE }
        </Text>
      </View>
      <View style={styles.serviceWrapper}>
        {
          skuList.length > 1 && (
            <View style={styles.itemWrapper}>
              <Text style={styles.itemTitle}>选择</Text>
              <Text style={styles.itemValue} numberOfLines={1}>
                已选: {selectedSku.name}
              </Text>
              <Text style={styles.itemDescription}>
                共{skuList.length}种产品名称可选
              </Text>
              <Pressable onPress={openModal}>
                <Icon name='icon-right' size={16} color='#696969' />
              </Pressable>
            </View>
          )
        }
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>配送</Text>
          <Text style={styles.itemValue}>现在下单，最快今日21:00-21:30送达</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>运费</Text>
          <Text style={styles.itemValue}>运费6元，满39元免运费</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>服务</Text>
          <Text style={styles.itemValue}>品质保证</Text>
        </View>
      </View>
      <SkuModal
        modalVisible={modalVisible}
        skuList={skuList}
        selectedSku={selectedSku}
        onSelectedSkuChange={onSelectedSkuChange}
        onCloseModal={closeModal}
      />
    </View>
  );
}

const styles = CustomStyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 16,
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
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#fff',
  },
  itemWrapper: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  itemTitle: {
    marginRight: 12,
  },
  itemValue: {
    flex: 1,
    color: '#000',
  },
  itemDescription: {
    marginRight: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    color: '#000',
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200, // 设置最小高度
    maxHeight: 400, // 设置最大高度
    width: '100%', // 设置宽度为100%
  },
  closeButton: {
    marginTop: 10,
    color: "#00aefd",
    textAlign: "center",
  },
})

export default ServiceCard;