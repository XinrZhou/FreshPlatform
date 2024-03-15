import React, { useState, useEffect } from "react";;
import { View, Text, ScrollView, Pressable, Modal, TouchableOpacity, Image } from "react-native";
import CustomStyleSheet from "/styles";
import { Icon } from "assets/fonts";
import SalePrice from "components/SalePrice";
import { Stepper, Button } from "@ant-design/react-native";

const SkuModal: React.JSX.Element = ({
  modalVisible = false,
  skuList = [],
  selectedSku = {},
  onSelectedSkuChange = () => {},
  onCloseModal = () => {}
}) => {
  const [count, setCount] = useState<number>(1);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onCloseModal}
      >
        <View style={styles.container}>
          <View style={styles.contianerWrapper}>
            <TouchableOpacity 
              onPress={onCloseModal}
              style={styles.closeButton}
            >
              <Icon name="icon-guanbi" size={24} color="#696969" />
            </TouchableOpacity>
            <View style={styles.content}>
              <Image
                style={styles.image}
                source={{
                  uri: selectedSku.imageUrl,
                }} 
              />
              {/* 图片遮罩 */}
              <View style={styles.overlay} />
              <View style={styles.description}>
                <Text style={styles.title}>
                  {selectedSku.name}
                </Text>
                <Text style={styles.price}>
                  ￥{selectedSku.discountPrice || selectedSku.originPrice}
                </Text>
                <Text style={styles.specification}>
                  已选 : {selectedSku.name}
                </Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.itemWrapper}>
              <Text style={styles.itemTitle}>产品名称</Text>
              <View style={styles.itemContent}>
                {
                  skuList.map(item => (
                    <Pressable onPress={() => onSelectedSkuChange(item)}>
                      <Text
                        key={item.id} 
                        size="medium" 
                        style={[
                          styles.contentButton,
                          item.id == selectedSku.id && styles.selectedButton
                        ]}
                      >
                        {item.name}
                      </Text>
                    </Pressable>
                  ))
                }
              </View>
            </View>
            <View style={styles.countWrapper}>
              <Text style={[
                styles.itemTitle,
                { flex: 2 }
              ]}>购买数量</Text>
              <Stepper 
                min={1} 
                max={99999} 
                defaultValue={1} 
                value={count}
                onChange={(value) => setCount(value)}
              />
            </View>
            <Pressable>
              <Text style={styles.buttonWrapper} >
                加入购物车
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 6,
  },
  contianerWrapper: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: 200, 
    maxHeight: 400, 
    width: '100%',
  },
  content: {
    position: "relative",
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#696969",
    boderRadius: 8,
  },
  overlay: { 
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.05)', 
    borderRadius: 8,
  },
  description: {
    display: "flex",
    justifyContent: "center",
    gap: 10
  },
  title: {
    flex: 2,
    color: "#000",
    fontSize: 12,
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    color: "#ff502f"
  },
  specification: {
    color: "#000",
    fontSize: 10
  },
  divider: {
    marginTop: 12,
    marginBottom: 4,
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  itemTitle: {
    color: "#000",
    marginVertical: 12,
  },
  itemContent: {
    flexDirection: "row",
    gap: 16
  },
  contentButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    color: "#000",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
  },
  selectedButton: {
    color: "#00aefd",
    borderColor: "#00aefd"
  },
  countWrapper: {
    flexDirection: "row",
  },
  stepper: {
    width: 100,
  },
  buttonWrapper: {
    marginTop: 36,
    paddingVertical: 16,
    marginBottom: -16,
    marginHorizontal: -16,
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#00aefd"
  }
})

export default SkuModal;