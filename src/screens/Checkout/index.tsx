import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const CheckoutScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Ingresso Pista (1)
        </Text>

        <View style={styles.info}>
          <Input label="Nome completo" />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Input middle label="CPF" />
            <Input middle label="Data de nascimento" />
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Ingresso Pista (2)
        </Text>

        <View style={styles.info}>
          <Input label="Nome completo" />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Input middle label="CPF" />
            <Input middle label="Data de nascimento" />
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Ingresso Camarote (1)
        </Text>

        <View style={styles.info}>
          <Input label="Nome completo" />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Input middle label="CPF" />
            <Input middle label="Data de nascimento" />
          </View>
        </View>
      </View>

      <Button onPress={() => navigation.navigate("Resume")}>
        {"próximo".toUpperCase()}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    marginVertical: 10,
    backgroundColor: "white",
    padding: 10,
  },
});
