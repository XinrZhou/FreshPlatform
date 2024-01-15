# Getting Started

<https://reactnative.dev/docs/getting-started/>

```bash
# using npm
npm start

# OR using Yarn 
# error Cannot start server in new window because no terminal app was specified.
# 新版本 Bug，使用 npm 代替，后续再指定运行平台
yarn start

# OR using npx
npx react-native start
```

## problems

### 重新生成 ios android 文件夹

```bash
# react-native >= 0.61.0
sudo rm -rf android/ ios/
yarn add react-native-eject
npx react-native-eject
```
