import { StyleSheet } from "react-native";
import px2dp from "./px2dp";

const CustomStyleSheet = {
    create(style) {
        let s = { ...style };
        // 目前仅对以下的属性进行处理
        let list = [
            "width",
            "height",
            "marginTop",
            "marginBottom",
            "marginLeft",
            "marginRight",
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
            "top",
            "right",
            "bottom",
            "left",
            "fontSize",
            "lineHeight",
        ];
        for (let outKey in s) {
            for (let innerKey in s[outKey]) {
                if (
                    list.includes(innerKey) &&
                    typeof s[outKey][innerKey] == "number"
                ) {
                    s[outKey][innerKey] = px2dp(s[outKey][innerKey]);
                }
            }
        }
        return StyleSheet.create(s);
    },
};
export default CustomStyleSheet;
