import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { Icon } from "../../assets/fonts";

const SearchBar: React.JSX.Element = ({
  isScroll = false
}) => {
  const [ searchText, setSearchText ] = useState('');

  return (
    <View style={[
      styles.searchWrapper,
      isScroll && styles.scrollWrapper
    ]}>
      <View style={[
        styles.searchContainer,
        isScroll && styles.scrollContainer
      ]}>
        <Icon 
          name="icon-sousuo"
          size={24}
          style={styles.searchIcon}
        />
        <TextInput 
          defaultValue={searchText}
          onChangeText={newText => setSearchText(newText)} 
        />
        <Pressable style={[
          styles.searchBtn,
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
    height: 40,
    borderRadius: 36,
  },

  scrollContainer: {
    borderWidth: 2,
    borderColor: '#379E01',
    backgroundColor: '#fff',
  },

  searchIcon: {
    marginLeft: 10,
    color: '#959595',
  },

  searchBtn: {
    position: 'absolute',
    top: 2,
    bottom: 2,
    right: 2,
    width: 66,
    borderRadius: 36,
    backgroundColor: '#FF5043',
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