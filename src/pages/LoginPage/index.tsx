import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image 
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { InputItem, List, Button, Icon} from "@ant-design/react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomStyleSheet from "styles";
import { login } from '../../store/slices/userSlice';

const LoginPage: React.JSX.Element = ({navigation}: any) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => {
    return {
      isLogin: state.user.isLogin
    }
  })

  const handleLogin = () => {
    dispatch(login({ number, password }));
    isLogin && navigation.navigate("UserCenter");
  }

  return (
    <View style={[
      styles.flexContainer,
      styles.containerWrapper
    ]}>
      <View style={[styles.flexContainer]}>
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
            // type="phone"
            clear={true}
            placeholder="请输入手机号"
            onChange={value => setNumber(value)}
          />
           <InputItem 
            value={password}
            clear={true}
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