import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "./components/pages/SplashScreen";
import WelcomeScreen from "./components/pages/WelcomeScreen";
import LoginScreen from "./components/auth/LoginScreen";
import RegisterScreen from "./components/auth/RegisterScreen";
import HomeScreen from "./components/pages/HomeScreen";
import SearchScreen from "./components/pages/SearchScreen";
import WishlistScreen from "./components/pages/WishlistScreen";
import CartScreen from "./components/pages/CartScreen";
import ProfileScreen from "./components/pages/ProfileScreen";
import OnboardingScreen from "./components/pages/OnboardingScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: { backgroundColor: "red" },
          headerLeftContainerStyle: { paddingLeft: 20 },
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: "SplashScreen",
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wishlist"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboard"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTabsNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === "Home") {
            iconSource = focused
              ? require("./assets/images/HomeActive.png")
              : require("./assets/images/Home.png");
          } else if (route.name === "Search") {
            iconSource = focused
              ? require("./assets/images/SearchActive.png")
              : require("./assets/images/Search.png");
          } else if (route.name === "Wishlist") {
            iconSource = focused
              ? require("./assets/images/HeartActive.png")
              : require("./assets/images/Heart.png");
          } else if (route.name === "Cart") {
            iconSource = focused
              ? require("./assets/images/CartActive.png")
              : require("./assets/images/Cart.png");
          } else if (route.name === "Profile") {
            iconSource = focused
              ? require("./assets/images/ProfileActive.png")
              : require("./assets/images/Profile.png");
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 35,
                height: 35,
              }}
            />
          );
        },
        tabBarActiveTintColor: "#192639",
        tabBarActiveBackgroundColor: "#192639",
        tabBarInactiveTintColor: "#192639",
        tabBarShowLabel: false,  // remove menu text from bottom
        tabBarInactiveBackgroundColor: "#192639",
        tabBarShowIcon: true,
        tabBarLabelStyle: { fontSize: 15, marginTop: 0 },
        tabBarIconStyle: {
          fontSize: 10,
          size: 25,
          width: 60,
          height: 60,
          backgroundColor: "transparent",
        },
        tabBarStyle: { paddingVertical: 10, height: 70 },
        // headerLeft: () => (
        //   // route.name !== "HomeScreen" && route.name !== "Signout" ? (
        //   // <BackButton />
        // ),
        // ) : null, // Show back button only on specific screens
        // headerStyle: { backgroundColor: "red" },
        headerLeftContainerStyle: { paddingLeft: 20 },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Page", header: () => null }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search", header: () => null }}
      />
      <BottomTab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{ title: "Wishlist", header: () => null }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Cart", header: () => null  }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile", header: () => null  }}
      />
    </BottomTab.Navigator>
  );
}

export default App;
