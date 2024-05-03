import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomStyleSheet from "styles";
import IconItem from "../IconItem";
import { Icon } from "assets/fonts";
import { CARD_CONTENT_LIST } from "constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ITEM_LIST = [
  {
    title: "会员日", 
    description: "可享88折",
    iconName: "icon-huiyuan", 
  },
  {
    title: "免运费", 
    description: "每日一次",
    iconName: "icon-yunsongzhong", 
  },
  {
    title: "30元红包", 
    description: "限时开卡礼",
    iconName: "icon-hongbao", 
  }
]

const CardItem = ({
  title, 
  description, 
  iconName,
}) => {
  return (
    <View style={[styles.flexRow, styles.cardItem]}>
      <Icon 
        size={24} 
        name={iconName}
        color="#c6ae92" 
        style={styles.iconWrapper}
      />
      <View>
        <View style={styles.flexRow}>
          <Text style={styles.itemTitle}> 
            {title} 
          </Text>
          <Icon size={16} color="#c6ae92"  name="icon-right" />
        </View>
        <Text style={styles.itemDescription}> 
          {description} 
        </Text>
      </View>
    </View>
  )
}

const VipCard: React.JSX.Element = () => {

  return (
    <View style={styles.cardContainer}>
      <View style={[styles.flexRow, styles.cardTitleWrapper]}>
          <Text style={styles.cardTitle}>
            开卡预计全年可省880元
          </Text>
        <LinearGradient
          style={styles.cardBtn}
          start={{ x: 0, y: 0 }}
          colors={['#f0decb', '#e3bc91']} 
        >
          <Pressable style={styles.flexRow}>
            <Text style={styles.btnText}>
              立即开通
            </Text>
            <Icon size={24}  name="icon-yousanjiao" />
          </Pressable>
        </LinearGradient>
      </View>
      <View style={[styles.flexRow, styles.cardItemWrapper]}>
        {
          ITEM_LIST.map((item, index) => {
            return (
              <CardItem 
                key={index}
                title={item.title}
                description={item.description}
                iconName={item.iconName}
              />
            )
          })
        }
      </View>
    </View>
  )
};

const styles = CustomStyleSheet.create({
  cardContainer: {
    marginHorizontal: 12,
    marginBottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#2d2f33',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitleWrapper: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardTitle:{
    color:'#c6ae92',
  },
  cardBtn: {
    paddingLeft: 12,
    paddingRight: 6,
    paddingVertical: 6,
    borderRadius: 16,
  },
  btnText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  cardItemWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#3a3c3d',
  },
  iconWrapper: {
    marginRight: 8,
    padding: 8,
    borderRadius: 30,
    borderColor: '#c6ae92',
    borderWidth: 1
  },
  itemTitle: {
    color: '#c6ae92',
  },
  itemDescription: {
    color: '#88807e',
    fontSize: 10,
  }
});

export default VipCard;