import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

const HeaderComponent = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Yapılacaklar</Text>
      <Text style={styles.headerText}>{props.activeTodoLen}</Text>
    </View>
  );
};

export default HeaderComponent;
