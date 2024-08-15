import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    //  <Text>Todoo..</Text>
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: '#3c0a6b'
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),}}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            //Parametrelerin aynısını verdiğimizde lçüyü otomatik olarak ayarlar
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
