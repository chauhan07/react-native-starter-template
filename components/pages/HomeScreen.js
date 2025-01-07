import React from "react";
import {
  SafeAreaView,
  Text,
  View,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const HomeScreen = ({ navigation }) => {
 
 return(
    <>
      <SafeAreaView  style={[ThemeStyle.mainWrapper]}>
        <View>
          <Text>
            Home Screen
          </Text>
        </View>
      </SafeAreaView>
    </>
 );
};

export default HomeScreen;
