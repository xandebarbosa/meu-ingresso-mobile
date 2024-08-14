import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { AuthScreen } from "./src/screens/Auth";
import { ProfileScreen } from "./src/screens/Profile";
import { PinCodeScreen } from "./src/screens/PinCode";
import { HomeScreen } from "./src/screens/Home";
import { EventScreen } from "./src/screens/Event";
import { CheckoutScreen } from "./src/screens/Checkout";
import { ProfileEventScreen } from "./src/screens/ProfileEvent";
import { TicketScreen } from "./src/screens/Ticket";
import { ResumeScreen } from "./src/screens/Resume";
import { MyEventsScreen } from "./src/screens/MyEvents";
import { Provider } from "react-redux";
import { store } from "./src/features/store";
import { CartScreen } from "./src/screens/Cart";
import { BuffetScreen } from "./src/screens/Buffet";
import { CategoryBuffetScreen } from "./src/screens/Buffet/CategoryBuffet";
import { ItemDetailBuffetScreen } from "./src/screens/Buffet/ItemDetailBuffet";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//headerShown: false,

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'MyEventsScreen') {
            return (
              <Ionicons
                name={
                  focused
                    ? 'information-circle'
                    : 'information-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ?  'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
        headerShown: false
      })}
    >
      <Tab.Screen
        options={{
          title: "Meus Eventos",
          tabBarBadge: 3
        }}
        name="MyEventsScreen"
        component={MyEventsScreen}
      />
      <Tab.Screen
        options={{
          title: "Home",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "Perfil",
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Resume" component={ResumeScreen} />
          <Stack.Screen name="Ticket" component={TicketScreen} />
          <Stack.Screen name="CategoryBuffet" component={CategoryBuffetScreen} />
          <Stack.Screen name="Buffet" component={BuffetScreen} />
          <Stack.Screen name="ItemBuffet" component={ItemDetailBuffetScreen} />
          <Stack.Screen name="ProfileEvent" component={ProfileEventScreen} />
          <Stack.Screen name="Event" component={EventScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="PinCode" component={PinCodeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="MyEvents" component={MyEventsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
