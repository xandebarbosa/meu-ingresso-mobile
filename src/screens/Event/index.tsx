import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import { Amount } from "./components/Amount";
import { Tickets } from "./components/Tickets";
import { Button } from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { addItem } from "../../features/cart/slice";

export const EventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useAppDispatch();

  const isLogged = useAppSelector((state) => state.auth.token !== "");
  const event = useAppSelector((state) => state.events.byId[route.params!.id]);

  const [ticketSelected, setTicketSelected] = useState(
    event.ticket.types[0].name
  );
  const [amount, setAmount] = useState(1);

  const handleTicketSelected = (ticket: string) => {
    setTicketSelected(ticket);
  };

  const handleAddAmount = () => {
    setAmount(amount + 1);
  };
  const handleRemoveAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={{ height: 200 }}
        />

        <View style={styles.info}>
          <View style={styles.row}>
            <Text>{event.date}</Text>
            <Text>{event.time}</Text>
          </View>
          <Text>{event.name}</Text>
          <Text>
            <Icon name="map-pin" /> {event.location}
          </Text>
        </View>

        <Tickets
          ticketSelected={ticketSelected}
          tickets={event.ticket.types}
          handleTicketSelected={handleTicketSelected}
        />

        <Amount
          amount={amount}
          handleAddAmount={handleAddAmount}
          handleRemoveAmount={handleRemoveAmount}
        />

        <Button
          onPress={() => {
            dispatch(
              addItem({
                event,
                ticket: {
                  type: ticketSelected,
                  amount,
                },
              })
            );
            navigation.navigate(isLogged ? "Cart" : "Auth");
          }}
        >
          {"Comprar".toUpperCase()}
        </Button>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginVertical: 20,
          }}
        >
          Detalhes
        </Text>

        <View
          style={{
            gap: 10,
          }}
        >
          <Text>{event.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  info: {
    marginBottom: 20,
    backgroundColor: "white",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
