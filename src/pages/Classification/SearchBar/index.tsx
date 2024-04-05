import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Text, 
  Pressable 
} from "react-native";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { Badge } from "@ant-design/react-native";
import { Icon } from "assets/fonts";

const SearchBar: React.JSX.Element = ({ cartCount }) => {
  const [searchText, setSearchText] = useState('');
  const [isPress, setIsPress] = useState(false);
  // const { cartCount } = useSelector(state => state.shoppingCart);

  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchBox}>
        <Icon 
          name="icon-sousuo"
          size={24}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          defaultValue={searchText}
          onChangeText={newText => setSearchText(newText)} 
          onFocus={() => setIsPress(true)}
          onBlur={() => setIsPress(false)}
        />
      </View>
      {
        isPress ?
          <LinearGradient 
            style={[
              styles.searchBtn,
              styles.searchLeft
            ]}
            colors={['#61C7E0', '#08B1FE']} 
          >
            <Pressable>
              <Text style={styles.btnText}>搜索</Text>
            </Pressable>
          </LinearGradient> :
          <Badge text={cartCount} style={styles.cartIcon}>
            <Icon 
              name="icon-gouwuche"
              size={32}
              color="black"
            />
          </Badge>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  searchBox: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    height: 36,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 36,
    borderColor: '#61C7E0',
  },

  searchIcon: {
    marginLeft: 10,
    color: '#DDDDDD',
  },

  searchInput: {
    height: 36,
    width: '100%'
  },

  searchLeft: {
    right: 4,
  },

  cartIcon: {
    right: 8
  },

  searchBtn: {
    width: 66,
    height: 36,
    borderRadius: 36,
  },

  btnText: {
    margin: 6,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }

}) 

export default SearchBar;