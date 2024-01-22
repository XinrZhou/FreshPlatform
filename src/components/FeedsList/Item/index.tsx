import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  Button, 
  Pressable 
} from "react-native";
import NumericInput from 'react-native-numeric-input';
import { Icon } from "assets/fonts";
import { FEED_COLUMS } from "constants";
import SalePrice from "../../SalePrice";


const FeedsItem: React.JSX.Element = ({
  feedItem = {}, 
  configProps = {},
  dataList = [],
  isNumeric = false,
  setDataList = () => {},
}) => {
  const { name, price, image, tags, saleAttribute, count, id } = feedItem;
  const { imageProps = {}, containerProps = {}, contentProps = {} } = configProps;

  const [itemCount, setItemCount] = useState(count)

  const onPress = () => console.log('press...')
  
  const onNumericValueChange = ((value: number) => {
    const newDataList = dataList.map((item, index) => {
      return item.id === id ? {...item, count: value} : item;
    })
    setItemCount(value);
    setDataList(newDataList);
  })

  return (
    <View style={[styles.itemContainer, {...containerProps}]}>
      <View>
        <Image
          style={[styles.itemImage, {...imageProps}]}
          source={
            {
              height: 220,
              width: 220,
              uri: image
            }
          }
        />
        {
          saleAttribute && (
            <Text style={styles.itemAttribue}>
              {saleAttribute}
            </Text>
          )
        }
      </View>
      <View style={[styles.itemContent, {...contentProps}]}>
        <Text style={styles.itemTitle}>
          {name}
        </Text>
        <View style={styles.tagWapper}>
          {
            tags?.map(item => {
              return (
                <Text style={styles.itemTag}>
                  {item}
                </Text>
              )
            })
          }
        </View>
        <View style={styles.bottomWrapper}>
          <SalePrice price={price} />
          {
            isNumeric ?
              <NumericInput
                rounded
                value={itemCount}
                minValue={1}
                maxValue={999}
                totalWidth={80}
                iconStyle={{color: '#000'}}
                onChange={onNumericValueChange}
              /> :
              <Pressable style={styles.addCartBtn} onPress={onPress}>
                <Icon name="icon-cart" size={20} color={'#fff'}/>
              </Pressable>
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    display: 'flex',
  },

  itemImage: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  itemAttribue: {
    position: 'absolute',
    top: 6,
    left: 8,
    backgroundColor: '#57C31F',
    color: '#fff',
    paddingHorizontal: 2,
    borderRadius: 4,
  },

  itemContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 8,
  },

  itemTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  tagWapper: {
    marginTop: 8,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
  },

  itemTag: {
    marginRight: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFD9CD',
    color: '#FC4E00',
    backgroundColor: '#FFF1EC',
  },

  bottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addCartBtn: {
    padding: 6,
    borderRadius: 32,
    backgroundColor: '#57C31F',
  },
})

export default FeedsItem;