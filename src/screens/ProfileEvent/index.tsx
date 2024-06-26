import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ProfileEventScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Ticket")}
      >
        <Text>João da Silva</Text>
        <View style={styles.row}>
          <Text>Pista (inteira)</Text>
          <Text>R$ 200,00</Text>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Ver ingresso
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Ticket")}
      >
        <Text>Maria da Silva</Text>
        <View style={styles.row}>
          <Text>Caramote (inteira)</Text>
          <Text>R$ 400,00</Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Ver ingresso
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 10,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
