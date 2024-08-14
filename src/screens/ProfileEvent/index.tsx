import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const ProfileEventScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text>João da Silva</Text>
        <View style={styles.row}>
          <Text>Pista (inteira)</Text>
          <Text>R$ 200,00</Text>
        </View>
        <View style={styles.button}>
        <FontAwesome.Button name="ticket" backgroundColor='#3b5998' onPress={() => navigation.navigate("Ticket")}>
          Ver ingresso
        </FontAwesome.Button>
        <FontAwesome.Button name="star" backgroundColor='#3b5998' onPress={() => navigation.navigate("CategoryBuffet")}>
          Ver Buffet
        </FontAwesome.Button>
        </View>
      </View>
      

      <View style={styles.card}>
      <Text>Maria da Silva</Text>
        <View style={styles.row}>
          <Text>Caramote (inteira)</Text>
          <Text>R$ 400,00</Text>
        </View>
        <View style={styles.button}>
        <FontAwesome.Button name="ticket" backgroundColor='#3b5998' onPress={() => navigation.navigate("Ticket")}>
          Ver ingresso
        </FontAwesome.Button>
        <FontAwesome.Button name="star" backgroundColor='#3b5998' onPress={() => navigation.navigate("Buffet")}>
          Ver Buffet
        </FontAwesome.Button>
        </View>
      </View>     
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
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 10
  }
});
