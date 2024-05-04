import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
} from "react-native";
import CustomStyleSheet from "/styles";
import { Icon } from "/assets/fonts";
import { Button, Badge } from "@ant-design/react-native";
import { ORDER_LIST } from "constants/mock";
import EmptyCard from "../../components/EmptyCard";
import ScrollTab from "./ScrollTab";
import OrderItem from "./OrderItem";

const ALL_ORDER = 5;

const OrderDetail: React.JSX.Element = ({ navigation, route }: any) => {
  const { orderType } = route.params;
  const [activeIndex, setActiveIndex] = useState(orderType);

  const handleIndexChange = (index: number) => setActiveIndex(index);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Pressable onPress={() => navigation.popToTop()}>
          <Icon name="icon-left" size={28} color="#000" style={styles.backIcon} />
        </Pressable>
        <Text style={styles.headerTitle}>我的订单</Text>
      </View>
      <View style={styles.tabWrapper}>
        <ScrollTab 
          activeIndex={activeIndex}
          handleIndexChange={handleIndexChange} 
        />
      </View>
      <View style={styles.contentWrapper}>
        {activeIndex === ALL_ORDER ? (
          ORDER_LIST.length > 0 ? (
            ORDER_LIST.map((item, index) => (
              <OrderItem key={item.id || index} orderItem={item} />
            ))
          ) : (
            <EmptyCard
              iconName="icon-meiyoudingdan2"
              title="暂无订单"
              tips="快去下单吧~" 
            />
          )
        ) : (
          ORDER_LIST.filter((item) => item.type === activeIndex).length > 0 ? (
            ORDER_LIST.filter((item) => item.type === activeIndex).map((filteredItem, index) => (
              <OrderItem key={filteredItem.id || index} orderItem={filteredItem} />
            ))
          ) : (
            <EmptyCard
              iconName="icon-meiyoudingdan2"
              title="暂无订单"
              tips="快去下单吧~" 
            />
          )
        )}
      </View>
    </ScrollView>
  );
};

const styles = CustomStyleSheet.create({
  headerWrapper: { 
    marginTop: 12,
    flexDirection: 'row',  
    alignItems: 'center' 
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
})

export default OrderDetail;
