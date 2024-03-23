import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from "assets/fonts";
import { getTotalPrice } from "utils";
import { DISTRIBUTION_LIST } from "constants/enums";
import RemarkModal from "./RemarkModal";
import CustomCheckBox from "components/CustomCheckBox";
import styles from "./styles";

const DISTRIBUTION = [
  { type: 0, name: '配送' },
  { type: 1, name: '门店自提' }
];

const DEFAULT_TEXT = "支持选择无接触配送"

const ProductCard: React.FC = ({ selectedList = [] }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDistribution, setSelectedDistribution] = useState(0);
  const [remarkText, setRemarkText] = useState(DEFAULT_TEXT);
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.user);

  const openModal = () => setModalVisible(true);

  const closeModal = () => setModalVisible(false);

  const handleRemarkSelect = (indexList: number[]) => {
    const selectedItems = indexList.map(index => DISTRIBUTION_LIST[index]);
    
    setRemarkText(selectedItems.join(','));
  }

  const DetailsRow: React.FC<{ title: string; details: string;}> = ({ title, details }) => (
    <View style={styles.detailsRow}>
      <Text style={styles.detailsTitle}>{title}</Text>
      <View style={styles.detailsContent}>
        <Text style={styles.detailsText} numberOfLines={1}>{details}</Text>
        <Pressable onPress={openModal}>
          <Icon name="icon-right" size={12} />
        </Pressable>
      </View>
    </View>
  );  

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/20240322214648%20%281%29.png' }}
        style={styles.logo}
      />
      <View style={styles.distribution}>
        {DISTRIBUTION.map((item, index) => (
          <View style={styles.optionWrapper} key={index}>
            <CustomCheckBox
              isChecked={selectedDistribution === item.type}
              onClick={() => setSelectedDistribution(item.type)}
            />
            <Text style={styles.optionText}>{item.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.product}>
        <View style={styles.headerWrapper}>
          <Text style={[styles.title, styles.titleBold]}>包裹</Text>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.detailsImage}>
            {selectedList.map((item, index) => (
              <View key={item.id} style={styles.imageWrapper}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.image}
                />
                <View style={styles.imageOverlay} />
              </View>
            ))}
          </View>
          <View style={styles.detailsWrapper}>
            <Text>
              共{selectedList.length}件
            </Text>
            <Icon name="icon-right" size={12} />
          </View>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <DetailsRow 
          title="配送备注" 
          details={remarkText}
          modalList={DISTRIBUTION_LIST}
        />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>小计:</Text>
        <Text style={[styles.priceText, styles.priceBold]}>
          ￥{getTotalPrice(selectedList)}
        </Text>
      </View>
      <RemarkModal
        modalVisible={modalVisible}
        modalContent={DISTRIBUTION_LIST}
        onCloseModal={closeModal} 
        handleRemarkSelect={handleRemarkSelect}
      />
    </View>
  );
}

export default ProductCard;
