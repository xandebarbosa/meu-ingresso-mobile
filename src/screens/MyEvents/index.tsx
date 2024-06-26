import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "../../components/Button";

export const MyEventsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileEvent")}
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          marginBottom: 30,
        }}
      >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={{ height: 100 }}
        />
        <View style={styles.content}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#e6e6e6",
              marginBottom: 10,
            }}
          >
            <View style={styles.row}>
              <Text>22 setembro 2024 </Text>
              <Text>19:00 - 22:00</Text>
            </View>
            <Text>Festa Rock</Text>
            <Text>
              <Icon name="map-pin" />
              Allianz Parque
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#e6e6e6",
              marginBottom: 10,
            }}
          >
            <Text>Ingressos</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>1x Pista (inteira) </Text>
              <Text>R$ 200,00</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>1x Camarote (inteira) </Text>
              <Text>R$ 400,00</Text>
            </View>

            <Text
              style={{
                textAlign: "right",
                marginBottom: 20,
              }}
            >
              Total: R$ 600,00
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Tempo restante da reserva: 03:55:00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Text>Aguardando pagamento</Text>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: "orange",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Button variant="outline" onPress={() => {}}>
        {"cancelar reserva".toUpperCase()}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  edit: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    padding: 10,
  },
});
