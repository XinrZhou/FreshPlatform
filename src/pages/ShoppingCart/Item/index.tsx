import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FeedsItem from "components/FeedsList/Item";
import CustomCheckBox from "components/CustomCheckBox";

// '1x1'商卡配置
const configProps = {
  imageProps: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  containerProps: {
    flexDirection: "row",
    flex: 1
  },
  contentProps: {
    paddingVertical: 0,
    paddingHorizontal: 12,
  }
};

const CartItem: React.JSX.Element = ({
  item = {},
  cartList = [],
  selectedList = [],
  handleSelectedChange = () => {},
  handleNumericChange = () => {},
}) => {
  const toggleCheckboxState = (id) => handleSelectedChange(id);

  return (
    <View style={styles.listItem} key={item.id}>
      <CustomCheckBox
        isChecked={selectedList?.includes(item.id)}
        onClick={() => toggleCheckboxState(item.id)}
      />
      <FeedsItem
        key={item.id} 
        feedItem={item}
        dataList={cartList}
        configProps={configProps}
        isNumeric={true}
        showTags={false}
        handleNumericChange={handleNumericChange}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default CartItem;