import React from "react";
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
  },
  contentProps: {
    paddingVertical: 0,
    paddingHorizontal: 12,
  }
};

const toggleCheckboxState = (selectedList, id, setSelectedList) => {
  setSelectedList(current => {
    if (current.includes(id)) {
      // checked
      return current.filter((item) => {
        return item !== id
      })
    } else {
      // unChecked
      return [...current, id]
    }
  })
};


const CartItem: React.JSX.Element = ({
  item = {},
  dataList, 
  setDataList,
  selectedList = [],
  setSelectedList,
}) => {
  return (
    <View style={styles.listItem} key={item.id}>
      <CustomCheckBox
        isChecked={selectedList?.includes(item.id)}
        onClick={() => toggleCheckboxState(
          selectedList, item.id, setSelectedList
        )}
      />
      <FeedsItem
        key={item.id} 
        feedItem={item}
        configProps={configProps}
        dataList={dataList}
        setDataList={setDataList}
        isNumeric={true}
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