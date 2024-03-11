import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Text, 
  Pressable 
} from "react-native";


const SearchBar: React.JSX.Element = ({
  isScroll = false,
  themeColor = '#FF5043',
}) => {
  const [ searchText, setSearchText ] = useState('');

  return (
    <View style={[
      styles.searchWrapper,
      isScroll && styles.scrollWrapper
    ]}>
      <View style={[
        styles.searchContainer,
        isScroll && styles.scrollContainer,
      ]}>
        <TextInput 
          defaultValue={searchText}
          onChangeText={newText => setSearchText(newText)} 
        />
        <Pressable style={[
          styles.searchBtn,
          { backgroundColor: themeColor },
          isScroll && styles.scrollBtn
        ]}>
          <Text style={styles.btnText}>搜索</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  scrollWrapper: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#fff'
  },

  searchContainer: {
    marginLeft: 16,
    marginRight: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    height: 36,
    borderRadius: 36,
  },

  scrollContainer: {
    borderWidth: 2,
    borderColor: '#379E01',
    backgroundColor: '#fff',
  },

  searchBtn: {
    position: 'absolute',
    top: 2,
    bottom: 2,
    right: 2,
    width: 66,
    borderRadius: 36,
  },

  scrollBtn: {
    backgroundColor: '#379E01',
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