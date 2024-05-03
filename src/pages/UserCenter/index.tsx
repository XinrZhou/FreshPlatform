import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, ScrollView, Image } from "react-native";
import CustomStyleSheet from "styles";
import { useSelector, useDispatch } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { getProductList } from "store/slices/homeSlice";
import { Icon } from "assets/fonts";
import { USER_OPERATION_LIST, PLATFORM_OPERATION_LIST } from "constants";
import SelfPickUpPoint from "components/SelfPickUpPoint";
import FeedsList from "components/FeedsList";
import BenefitCard from "./BenefitCard";
import VipCard from "./VipCard";
import AdvertiseCard from "./AdvertiseCard";
import OperationCard from "./OperationCard";
import RecommendList from "./RecommendList";

const PAGE_SIEZ = 20;
const DEFAULT_AVATAR = 'https://tse3-mm.cn.bing.net/th/id/OIP-C.9IFFP25NR6-Rna3JUzGMpgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7';

const UserCenter: React.JSX.Element = ({ navigation, route }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { isLogin, userInfo } = useSelector(state => state.user);
  const { productList } = useSelector(state => state.home);

  useEffect(() => {
    if (!isLogin) {
      navigation.navigate('LoginPage', {
        lastPage: '我的'
      });
    }
  }, [isLogin])

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getProductList({ page: page, pageSize: PAGE_SIEZ }));
    }, [])
  )

  const handleAddCart = async(sid) => {
    await dispatch(addCart({ skuId: sid, userId: userInfo.id }));
    await dispatch(getCart());
  };

  const handleFeedsItemClick = (params) => {
    navigation.navigate('ProductDetail', { 
      id: params.id
    });
  };

  return (
    <View style={styles.containerWrapper}>
      <LinearGradient
        colors={['#a7c8e6', '#b7cde1','#cedceb', '#d5dfe9']} 
      >
        <View style={[styles.flexRow, styles.userInfoContainer]}>
          <View style={styles.flexRow}>
            <Image
              width={64}
              height={64}
              source={{
                uri: userInfo.avatarUrl || DEFAULT_AVATAR,
              }}
              style={styles.avatar}
            />
            <View style={styles.detailInfoWrapper}>
              <Text style={styles.nickName}>
                {/* {userInfo.name} */}
                爱吃奶糖的大白兔
              </Text>
              {/* <SelfPickUpPoint themeColor="#959595"/> */}
            </View>
          </View>
          <View style={styles.settingsWrapper}>
            <Icon size={30} color="#000" name="icon-shezhi" />
            <Text style={styles.settingsText}>
              设置
            </Text>
          </View>
        </View>
        <BenefitCard />
        <VipCard />
      </LinearGradient>
      <View style={styles.contentContainer}>
        <OperationCard operationList={USER_OPERATION_LIST} />
        <AdvertiseCard />
        <OperationCard operationList={PLATFORM_OPERATION_LIST} />
        <RecommendList />
      </View>
      <FeedsList
        data={productList} 
        numColumns={2}
        handleAddCart={handleAddCart}
        handleFeedsItemClick={handleFeedsItemClick} 
      />
    </View>
  );
}

const styles = CustomStyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  settingsWrapper: {
    marginRight: 2,
  },
  settingsText: {
    fontSize: 10
  },
  detailInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  avatar: {
    borderRadius: 34,
    marginRight: 12,
  },

  nickName: {
    fontSize: 16,
    color: '#000',
  },

  contentContainer: {
    marginTop: -2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
})

export default UserCenter;