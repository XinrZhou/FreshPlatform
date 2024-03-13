import React, { useState, useEffect } from "react";
import { Dimensions, Image } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const ScaledImage = (props) => {
  const [source, setSource] = useState({ uri: props.uri });

  useEffect(() => {
    Image.getSize(props.uri, (width, height) => {
      const aspectRatio = width / height;
      const imageWidth = screenWidth;
      const imageHeight = imageWidth / aspectRatio;

      // 调整高度为整数，避免可能的模糊
      const adjustedHeight = Math.round(imageHeight);

      setSource({ uri: props.uri, width: imageWidth, height: adjustedHeight });
    });
  }, [props.uri]);

  return <Image source={source} style={[props.style, { resizeMode: "contain" }]} />;
};

export default ScaledImage;
