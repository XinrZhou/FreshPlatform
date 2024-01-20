import React, {useState} from "react";
import { 
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet
 } from "react-native";
 import LinearGradient from "react-native-linear-gradient";

const ScrollNavBar: React.JSX.Element = ({
  navList = []
}) => {
  const [navActiveIndex, setNavActiveIndex] = useState(0)

  return (
    <ScrollView 
      horizontal
      style={styles.scrollWrapper}
    >
      {
        navList.map((item, index) => {
          return (
            <View 
              key={item.id} 
              style={styles.navItemWrapper}
              onPointerDown={() => setNavActiveIndex(index)}
            >
              <Image
                source={{
                  uri: item.url
                }}
                style={[
                  styles.navItemImage,
                  index === navActiveIndex && {borderColor: '#FF7E45'}
                ]} 
              />
              {
                index === navActiveIndex ?
                <LinearGradient
                  start={{ x: 0, y: 0 }} 
                  end={{ x: 1, y: 0 }}
                  colors={['#FF8E44', '#FF2042']}
                  style={styles.navItemText}
                >
                  <Text style={{color: '#fff'}}>
                    蔬菜
                  </Text>
                </LinearGradient> :
                <Text style={styles.navItemText}>
                  蔬菜
                </Text>
              }
            </View>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  navItemWrapper: {
    marginHorizontal: 16,
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
    paddingHorizontal: 18,
    marginTop: 6,
    color: '#000',
    borderRadius: 16,
  },

  navItemActiveText: {
    color: '#fff',
    backgroundColor: '#FF7E45'
  }
})

export default ScrollNavBar;