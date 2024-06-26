import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export const TicketScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>Ingresso</Text>

      <View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXB6tvgHUw7BV-VIRDiLRjQDhFepQsGNxWA&s",
            height: 400,
          }}
        />

        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text>João da Silva</Text>
          <View style={styles.row}>
            <Text>Pista (inteira)</Text>
            <Text>R$ 200,00</Text>
          </View>
        </View>

        <Text>Evento</Text>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text>22 setembro 2024 </Text>
            <Text>19:00 - 22:00</Text>
          </View>
          <Text>Festa do Rock</Text>
          <Text>
            {" "}
            <Icon name="map-pin" /> Allian Parque
          </Text>
        </View>
      </View>
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
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
