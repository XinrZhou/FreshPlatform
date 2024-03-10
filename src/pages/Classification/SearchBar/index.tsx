import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Text, 
  Pressable 
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "../../../assets/fonts";


const SearchBar: React.JSX.Element = () => {
  const [searchText, setSearchText] = useState('');
  const [isPress, setIsPress] = useState(true);

  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchInput}>
        <Icon 
          name="icon-sousuo"
          size={24}
          style={styles.searchIcon}
        />
        <TextInput 
          defaultValue={searchText}
          onChangeText={newText => setSearchText(newText)} 
        />
      </View>
      {
        isPress ?
          <Icon 
            name="icon-gouwuche"
            size={28}
            color="black"
            style={styles.searchLeft}
          /> :
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
          </LinearGradient>
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

  searchInput: {
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

  searchLeft: {
    right: 2,
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