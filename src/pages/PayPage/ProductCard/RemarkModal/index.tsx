import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Modal, TouchableOpacity, Image } from "react-native";
import CustomStyleSheet from "/styles";
import { Icon } from "assets/fonts";

const RemarkModal = ({ 
  modalVisible = false, 
  modalContent = [], 
  handleRemarkSelect = () => {},
  onCloseModal = () => {} 
}) => {
  const [currentIndex, setCurrentIndex] = useState([]);

  const handeleContentClick = (index: number) => {
    if (currentIndex.includes(index)) {
      setCurrentIndex(currentIndex.filter(item => item !== index));
    } else {
      setCurrentIndex([...currentIndex, index]);
    }
  }

  const handleSelect = () => {
    handleRemarkSelect(currentIndex);
    onCloseModal();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onCloseModal}
    >
      <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <Pressable onPress={onCloseModal} style={styles.closeButton}>
            <Icon name="icon-guanbi" size={20} color="#696969" />
          </Pressable>
          <Text style={styles.title}>备注</Text>
          <View style={styles.content}>
            {modalContent.map((item, index) => (
              <Pressable 
                key={index} 
                onPress={() => handeleContentClick(index)}
              >
                <Text style={[
                  styles.text,
                  currentIndex.includes(index) && styles.selectedText
                ]}>
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleSelect}>
              <Text style={styles.buttonText} >
                确认选择
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

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
  containerWrapper: {
    padding: 16,
    height: 260,
    width: '100%',
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    flexDirection: "row",
    gap: 16,
    flexWrap: 'wrap',
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#000'
  },
  text: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#F2F2F2",
  },

  selectedText: {
    backgroundColor: '#e6f7ff',
    color: '#23a2ff' 
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 8, 
    width: 300, 
    alignSelf: 'center', // 水平居中
    backgroundColor: "#00aefd",
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  buttonText: {
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
  }
});

export default RemarkModal;
