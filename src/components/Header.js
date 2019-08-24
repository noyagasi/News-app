import { Image, View, Dimensions, StyleSheet } from "react-native";
import React from "react";

function Header() {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.viewStyle}>
      <Image
        style={{ width: width * 0.7, height: height * 0.1 }}
        source={{
          uri:
            "https://techcrunch.com/wp-content/uploads/2013/05/hacker-news1.jpg"
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#FFFFCC",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  }
});

export default Header;
