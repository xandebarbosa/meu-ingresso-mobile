import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import { EventCard } from "./components/EventCard";
import { Avatar } from "../../components/Avatar";
import { useAppSelector } from "../../features/hooks";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const isLogged = useAppSelector((state) => state.auth.token !== "");
  const itemsCount = useAppSelector((state) => state.cart.items.length);
  const events = useAppSelector((state) =>
    state.events.allId.map((id) => state.events.byId[id])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eventText}> Eventos</Text>
        <View style={styles.row}>
          {isLogged && (
            <TouchableOpacity
              style={styles.cartContainer}
              onPress={() => navigation.navigate("Cart")}
            >
              <Icon name="shopping-cart" size={24} />
              {itemsCount > 0 && (
                <Text style={styles.cartBadge}>{itemsCount}</Text>
              )}
            </TouchableOpacity>
          )}
          <Avatar />
        </View>
      </View>

      <ScrollView>
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  eventText: {
    fontSize: 20,
  },
  scroll: {
    gap: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  cartContainer: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -10,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#484349",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});
