import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from "assets/fonts";
import { InputItem, List, Button} from "@ant-design/react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomStyleSheet from "styles";
import { login, getInfo } from 'store/slices/userSlice';

const LoginPage: React.JSX.Element = ({navigation, route}: any) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLogin, userInfo } = useSelector(state => state.user);

  useEffect(() => {
    isLogin && navigation.goBack();
  }, [isLogin])

  const handleLogin = () => {
    dispatch(login({ number, password }));
  }

  return (
    <View style={{ position: 'relative' }}>
      <View style={styles.iconWrapper}>
        <Pressable onPress={() => navigation.navigate("首页")}>
          <Icon name="icon-left" size={32} color="#000"/>
        </Pressable>
        </View>
      <View style={[
        styles.flexContainer,
        styles.containerWrapper
      ]}>
        <View style={styles.flexContainer}>
          <Image
            source={{
              width: 160,
              height: 160,
              uri: 'https://fresh-platform.oss-cn-hangzhou.aliyuncs.com/head/v2-812e699a6105d9681d9855b1e61adad2_xll.png',
            }}
          />
          <Text style={styles.title}>欢迎来到Sirius 开启鲜美生活</Text>
        </View>
        <View  style={styles.formContainer}>
          <List>
            <InputItem
              value={number}
              placeholder="请输入手机号"
              onChange={value => setNumber(value)}
            />
            <InputItem 
              value={password}
              type="password"
              placeholder="请输入密码"
              onChange={value => setPassword(value)}
            />
          </List>
          <Button 
            type="primary"  
            onPress={handleLogin}
          >
            登录
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = CustomStyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWrapper: {
    height: 750,
    backgroundColor: '#fff',
    gap: 10,
  },
  iconWrapper: {
    position: 'absolute',
    marginTop: 15,
    left: 10,
    zIndex: 100,
  },
  title: {
    color: '#1476fd'
  },
  formContainer: {
    marginTop: 20,
    width: 260,
    gap: 20
  },
})

export default LoginPage;