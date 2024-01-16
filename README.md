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

### react-native-vector-icons 图标不显示

官方图标库：<https://oblador.github.io/react-native-vector-icons/>

android/app/src/main/build.gradle 添加`apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle");`

### 报错：Duplicate resoucres android build

> 使用 react-native-vector-icons 图标库时，复制 AntDesign.tff 文件至 android 目录，编译时报错：AntDesign.ttf: Error: Duplicate resources

参考：<https://github.com/oblador/react-native-vector-icons/issues/1416>

说明：react native ≥ 0.60，自动 link，删除 android 文件夹下的 *.tff 文件即可编译成功

