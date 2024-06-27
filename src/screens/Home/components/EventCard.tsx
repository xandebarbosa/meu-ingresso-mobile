import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Event } from "../../../features/events/types";

interface Props extends Event {}

export const EventCard = ({
  id,
  name,
  location,
  date,
  time,
  image,
  ticket,
}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Event", {
          id,
        })
      }
    >
      <Image
        source={{
          uri: image,
        }}
        style={{ height: 200 }}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text>{date}</Text>
          <Text>{time}</Text>
        </View>
        <Text>{name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>
            <Icon name="map-pin" />
            {location}
          </Text>
          <Text>
            {ticket.types
              .sort((a, b) => a.price - b.price)[0]
              .price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    padding: 10,
  },
});
