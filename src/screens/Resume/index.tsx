import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "../../components/Button";
import { useAppSelector } from "../../features/hooks";

export const ResumeScreen = () => {
  const tickets = useAppSelector((state) =>
    state.tickets.allId.map((id) => state.tickets.byId[id])
  );

  const items = tickets.reduce((acc, cur) => {
    if (!acc[cur.eventId]) {
      acc[cur.eventId] = [cur];
    } else {
      acc[cur.eventId] = [...acc[cur.eventId], cur];
    }

    return acc;
  }, {});

  const eventId = Object.keys(items)[0];

  const event = useAppSelector((state) => state.events.byId[eventId]);

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Resumo do pedido
        </Text>

        <View style={styles.info}>
          <View>
            <View style={styles.row}>
              <Text>{event.date}</Text>
              <Text>{event.time}</Text>
            </View>
            <Text>{event.name}</Text>
            <Text>
              <Icon name="map-pin" /> {event.location}
            </Text>
          </View>

          {items[eventId].map((ticket) => (
            <View
              key={ticket.id}
              style={{
                marginVertical: 10,
              }}
            >
              <Text>{ticket.type}</Text>
              <Text>{ticket.name}</Text>
              <View style={styles.row}>
                <Text>{ticket.document}</Text>
                <Text>{ticket.birthDate}</Text>
              </View>
            </View>
          ))}

          <Text
            style={{
              marginTop: 20,
              textAlign: "right",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Total R$ 1.000,00
          </Text>
        </View>
      </View>

      <Button onPress={() => {}}>{"reservar agora".toUpperCase()}</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  info: {
    marginVertical: 10,
    backgroundColor: "white",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
