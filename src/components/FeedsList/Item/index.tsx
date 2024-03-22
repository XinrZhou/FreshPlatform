import React, { useState, useEffect } from "react";
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
  showTags = false,
  handleNumericChange = () => {},
  handleAddCart = () => {},
}) => {
  const { imageProps = {}, containerProps = {}, contentProps = {} } = configProps;
  const { id, name, spuName, skuName, specialSpec, tags, imageUrl, originPrice, discountPrice, unit, count = 1, skuId, userId } = feedItem;
  const [itemCount, setItemCount] = useState(count);

  const onNumericChange = ((value: number) => {
    setItemCount(value);
    handleNumericChange({
      id, 
      count: value, 
      skuId, 
      userId
    });
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
              uri: imageUrl
            }
          }
        />
      </View>
      <View style={[styles.itemContent, {...contentProps}]}>
        <Text style={styles.itemTitle}>
          {name || skuName}
        </Text>
        {
          showTags && (
            <View style={styles.tagWapper}>
              {
                tags?.length > 0 && (
                  <Text style={styles.itemTag}>{tags.join(' | ')}</Text>
                )
              }
              {
                Object.values(specialSpec).flat().join(' | ') && (
                  <Text style={styles.itemTag}>
                    {
                      Object.values(specialSpec).flat().join(' | ')
                    }
                  </Text>
                )
              }
            </View>
          )
        }
        <View style={styles.bottomWrapper}>
          <SalePrice  
            originPrice={originPrice} 
            discountPrice={discountPrice}
            unit={unit}
          />
          {
            isNumeric ?
              <NumericInput
                rounded
                value={itemCount}
                minValue={1}
                maxValue={999}
                totalWidth={80}
                iconStyle={{color: '#000'}}
                onChange={onNumericChange}
              /> :
              <Pressable 
                style={styles.addCartBtn} 
                onPress={() => handleAddCart(id)}
              >
                <Icon name="icon-gouwuche" size={20} color={'#fff'}/>
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
    color: '#999',
  },

  bottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addCartBtn: {
    padding: 6,
    borderRadius: 32,
    backgroundColor: '#07aefd',
  },
})

export default FeedsItem;