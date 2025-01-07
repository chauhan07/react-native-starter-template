import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const WishlistScreen = ({ navigation }) => {
 
 return(
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView  style={[ThemeStyle.mainWrapper]}>
        <View>
          <Text>
            Wishlist Screen
          </Text>
        </View>
      </SafeAreaView>
    </>
 );
};

export default WishlistScreen;
