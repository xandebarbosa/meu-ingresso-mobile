import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import { Button } from "../../components/Button";
import { Cart } from "../../features/cart/types";
import { removeItem } from "../../features/cart/slice";
import { useAppDispatch, useAppSelector } from "../../features/hooks";

export const CartScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const cartItems = useAppSelector((state) => state.cart.items);

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
        {Object.keys(items).length === 0 ? (
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Seu carrinho está vazio
          </Text>
        ) : (
          <View style={styles.card}>
            {Object.keys(items).map((eventId) => {
              const event = items[eventId][0].event;

              return (
                <View
                  key={eventId}
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    marginBottom: 20,
                    paddingBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginBottom: 10,
                    }}
                  >
                    {event.name}
                  </Text>
                  {items[eventId].map((item) => (
                    <View key={item.ticket.type} style={styles.content}>
                      <View style={styles.row}>
                        <Text>{item.ticket.type}</Text>

                        <TouchableOpacity
                          onPress={() => dispatch(removeItem(item.ticket.type))}
                        >
                          <Icon name="trash-2" size={20} color="red" />
                        </TouchableOpacity>
                      </View>
                      <Text>
                        Valor:{" "}
                        {event.ticket.types
                          .find((t) => t.name === item.ticket.type)!
                          .price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                      </Text>
                      <Text>Quantidade: {item.ticket.amount}</Text>
                    </View>
                  ))}

                  <Text
                    style={{
                      textAlign: "right",
                      marginBottom: 10,
                    }}
                  >
                    Total:{" "}
                    {items[eventId]
                      .reduce(
                        (acc, item) =>
                          acc +
                          item.ticket.amount *
                            item.event.ticket.types.find(
                              (t) => t.name === item.ticket.type
                            )!.price,
                        0
                      )
                      .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </Text>

                  <Button
                    variant="outline"
                    onPress={() =>
                      navigation.navigate("Checkout", {
                        eventId: event.id,
                      })
                    }
                  >
                    <Text>{"Preencher ingressos".toUpperCase()}</Text>
                  </Button>
                </View>
              );
            })}
          </View>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {"continuar comprando".toUpperCase()}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
  content: {
    marginBottom: 10,
    paddingBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
