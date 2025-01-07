import React from "react";
import {
  SafeAreaView,
  Text,
  View,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const LoginScreen = ({ navigation }) => {
 
 return(
    <>
      <SafeAreaView  style={[ThemeStyle.mainWrapper]}>
        <View>
          <Text>
            Login Screen
          </Text>
        </View>
      </SafeAreaView>
    </>
 );
};

export default LoginScreen;
