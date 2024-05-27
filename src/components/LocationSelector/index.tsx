import React, { useState } from "react";
import { View, Text } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import CustomStyleSheet from "styles";
import { Icon } from "assets/fonts";
import { LOCATION_OPTIONS } from 'constants/mock';

const LocationSelector: React.JSX.Element = ({
  iconProps = {},
  textProps = {},
  onLocationChange = () => {},
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onLocationChange();
  }

  return (
    <ModalDropdown
      options={LOCATION_OPTIONS}
      showsVerticalScrollIndicator={false}
      dropdownTextStyle={{
        fontSize: 12,
        color: "#696969"
      }}
      onSelect={handleSelect}
    >
        <View style={styles.locationWrapper}>
        <Icon 
          name="icon-didian" 
          size={32} 
          color="#000"
          style={iconProps}
        />
        <Text style={[styles.locationText, textProps]}>
          {
            LOCATION_OPTIONS[selectedIndex]
          }
        </Text>
        <Icon 
          name="icon-down" 
          size={32} 
          color="#000"
          style={iconProps}
        />
      </View>
    </ModalDropdown>
  )
};

const styles = CustomStyleSheet.create({
  locationWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#000"
  }
})

export default LocationSelector;