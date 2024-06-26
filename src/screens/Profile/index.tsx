import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";

export const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.edit}>
          <Icon name="edit" size={20} color="#000" />
        </TouchableOpacity>
        <Avatar />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          João da Silva
        </Text>
        <Text>
          <Icon name="phone" /> (11) 99999-9999
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            width: 100,
          }}
        >
          Meus eventos
        </Text>

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
                Allian Parque
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    position: "relative",
    alignItems: "center",
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
