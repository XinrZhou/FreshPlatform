import React, {useState} from "react";
import { 
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  Pressable
 } from "react-native";
 import LinearGradient from "react-native-linear-gradient";
 import { Category } from "../../types/type";

const ScrollNavBar: React.JSX.Element = ({
  navList = [],
  handleNavIndexChange = () => {},
}) => {
  const [navActiveIndex, setNavActiveIndex] = useState(0);

  const onNavIndexChange = (index: number, item: Category) => {
    setNavActiveIndex(index);
    handleNavIndexChange(index, item.id)
  }

  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollWrapper}
    >
      {
        navList.map((item, index) => {
          return (
            <Pressable onPress={() => onNavIndexChange(index, item)}>
              <View 
                key={item.id} 
                style={styles.navItemWrapper}
              >
                <Image
                  source={{
                    uri: item.imageUrl
                  }}
                  style={[
                    styles.navItemImage,
                    index === navActiveIndex && {borderColor: '#08B1FE'}
                  ]} 
                />
                {
                  index === navActiveIndex ?
                  <LinearGradient
                    start={{ x: 0, y: 0 }} 
                    end={{ x: 1, y: 0 }}
                    colors={['#61C7E0', '#08B1FE']}
                    style={styles.navItemText}
                  >
                    <Text style={{color: '#fff'}}>
                      {item.name}
                    </Text>
                  </LinearGradient> :
                  <Text style={styles.navItemText}>
                    {item.name}
                  </Text>
                }
              </View>
            </Pressable>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollWrapper: {
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
  },

  navItemWrapper: {
    marginVertical: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navItemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },

  navItemText: {
    paddingHorizontal: 10,
    marginTop: 6,
    color: '#000',
    borderRadius: 16,
  },

  navItemActiveText: {
    color: '#fff',
    backgroundColor: '#17A3D4'
  }
})

export default ScrollNavBar;