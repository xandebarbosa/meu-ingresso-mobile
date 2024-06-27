import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CheckoutItem } from "./CheckoutItem";
import { Button } from "../../components/Button";
import { Cart } from "../../features/cart/types";
import { Ticket } from "../../features/tickets/types";
import { createTickets } from "../../features/tickets/slice";
import { useAppDispatch, useAppSelector } from "../../features/hooks";

interface ChangeValues {
  id: string;
  name: string;
  value: string;
  type: string;
}

export const CheckoutScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const [values, setValues] = useState({});

  const cartItems = useAppSelector((state) =>
    state.cart.items.filter((item) => item.event.id === route.params!.eventId)
  );

  const handleChange = ({ id, name, value, type }: ChangeValues) => {
    setValues((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [name]: value,
        type,
      },
    }));
  };

  const handleSubmit = () => {
    const payload: Ticket[] = Object.values(values).map((value) => ({
      ...value,
      eventId: route.params!.eventId,
      id: Math.random().toString(36).substring(7),
    }));

    dispatch(createTickets(payload));
    navigation.navigate("Resume");
  };

  const items = cartItems.reduce<Record<string, Cart[]>>((acc, item) => {
    if (!acc[item.event.id]) {
      acc[item.event.id] = [item];
    } else {
      if (acc[item.event.id].some((i) => i.ticket.type === item.ticket.type)) {
        acc[item.event.id] = acc[item.event.id].map((i) => {
          if (i.ticket.type === item.ticket.type) {
            return {
              ...i,
              ticket: {
                ...i.ticket,
                amount: i.ticket.amount + item.ticket.amount,
              },
            };
          }

          return i;
        });
      } else {
        acc[item.event.id] = [...acc[item.event.id], item];
      }
    }

    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.keys(items).map((eventId) => (
          <View key={eventId}>
            {items[eventId].map((item, index) => (
              <View key={index}>
                {Array.from({ length: item.ticket.amount }).map(
                  (_, indexInput) => (
                    <CheckoutItem
                      key={indexInput}
                      index={indexInput + 1}
                      type={item.ticket.type}
                      onChange={(name, value) =>
                        handleChange({
                          id: `${eventId}-${index}-${indexInput}`,
                          name,
                          value,
                          type: `Ingresso ${item.ticket.type} (${
                            indexInput + 1
                          })`,
                        })
                      }
                    />
                  )
                )}
              </View>
            ))}
          </View>
        ))}
        <Button onPress={handleSubmit}>{"próximo".toUpperCase()}</Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
