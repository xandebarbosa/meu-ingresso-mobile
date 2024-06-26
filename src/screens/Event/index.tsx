import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Amount } from "./components/Amount";
import { Tickets } from "./components/Tickets";

export const EventScreen = () => {
  const navigation = useNavigation();

  const [ticket, setTicket] = useState("track"); // track | cabin
  const [amount, setAmount] = useState(1);

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
            <Text>22 setembro 2024 </Text>
            <Text>19:00 - 22:00</Text>
          </View>
          <Text>Festa do Rock</Text>
          <Text>
            <Icon name="map-pin" /> Allianz Parque
          </Text>
        </View>

        <Tickets ticket={ticket} />

        <Amount amount={amount} />

        <Button onPress={() => navigation.navigate("Checkout")}>
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
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            excepturi dicta. Voluptate maxime ut labore voluptates doloribus,
            accusantium quod similique culpa excepturi? Possimus, architecto
            dolores. Nulla magnam sint fugit praesentium?
          </Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ut
            quasi porro excepturi minus quod nesciunt quisquam cum libero?
            Expedita ab qui assumenda eligendi fugiat earum sint molestias
            dolorem. Non.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ut
            quasi porro excepturi minus quod nesciunt quisquam cum libero?
            Expedita ab qui assumenda eligendi fugiat earum sint molestias
            dolorem. Non.
          </Text>
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
