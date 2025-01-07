import React from "react";
import {
  SafeAreaView,
  Text,
  View,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const SearchScreen = ({ navigation }) => {
 
 return(
    <>
      <SafeAreaView  style={[ThemeStyle.mainWrapper]}>
        <View>
          <Text>
            Search Screen
          </Text>
        </View>
      </SafeAreaView>
    </>
 );
};

export default SearchScreen;
