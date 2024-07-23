import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIconStyle: {
            display: "none",
          },
          title: "Meus Eventos",
        }}
        name="MyEventsScreen"
        component={MyEventsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIconStyle: {
            display: "none",
          },
          title: "Home",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIconStyle: {
            display: "none",
          },
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
