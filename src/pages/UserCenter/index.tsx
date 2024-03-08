import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image 
} from "react-native";
import { InputItem, List, Button} from "@ant-design/react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomStyleSheet from "../../styles";

const UserCenter: React.JSX.Element = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
            value={userName}
            type="phone"
            clear={true}
            placeholder="请输入手机号"
            onChange={value => setUserName(value)}
          />
           <InputItem 
            value={password}
            clear={true}
            placeholder="请输入密码"
            onChange={value => setPassword(value)}
          />
        </List>
        <Button type="primary">
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

export default UserCenter;