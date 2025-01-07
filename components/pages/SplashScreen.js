import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StatusBar,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const SplashScreen = ({ navigation }) => {

  const goToHome = () => {
    navigation.navigate("Home");
  };
  const goToOnboard = () => {
    navigation.navigate("Onboard");
  };
  
  return (
    <SafeAreaView style={[ThemeStyle.mainWrapper]}>
      <View>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Text>
          Splash Screen
        </Text>

        <Button 
          title="Go to Home"
          onPress={goToHome}  // Trigger navigation on button press
        />

        <Button 
          title="Go to On Board"
          onPress={goToOnboard}  // Trigger navigation on button press
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
