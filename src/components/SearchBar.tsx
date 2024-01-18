import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { Icon } from '../assets/fonts';

const SearchBar: React.JSX.Element = () => {
  const [ searchText, setSearchText ] = useState('');

  return (
    <View style={styles.searchContainer}>
      <Icon 
        name="icon-search"
        size={24}
        style={styles.searchIcon}
      />
      <TextInput 
        style={{
          width: '100%'
        }}
        defaultValue={searchText}
        onChangeText={newText => setSearchText(newText)} 
      />
      <Pressable style={styles.searchBtn}>
        <Text style={styles.btnText}>搜索</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 36,
  },

  searchIcon: {
    marginLeft: 10,
    color: '#696969',
  },

  searchBtn: {
    position: 'absolute',
    right: 6,
    width: 66,
    height: 36,
    borderRadius: 36,
    backgroundColor: '#FF5043',
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