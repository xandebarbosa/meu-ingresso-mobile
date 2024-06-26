import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "../../components/Button";

export const ResumeScreen = () => {
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
              <Text>22 setembro 2024</Text>
              <Text>19:00 - 22:00</Text>
            </View>
            <Text>Festa do Rock</Text>
            <Text>
              <Icon name="map-pin" /> Allian Parque
            </Text>
          </View>
          <View style={[styles.row, { marginTop: 20 }]}>
            <Text>2x Camarote</Text>
            <Text>R$ 800,00</Text>
          </View>
          <Text>- João da Silva</Text>
          <Text>- Maria da Silva</Text>
          <View style={[styles.row, { marginTop: 20 }]}>
            <Text>1x Pista</Text>
            <Text>R$ 200,00</Text>
          </View>
          <Text>- José da Silva</Text>

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
