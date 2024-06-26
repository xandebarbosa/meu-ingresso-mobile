import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const EventCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Event")}
    >
      <Image
        source={{
          uri: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={{ height: 200 }}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text>22 setembro 2024 </Text>
          <Text>19:00 - 22:00</Text>
        </View>
        <Text>Festa do Rock</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>
            <Icon name="map-pin" />
            Allian Parque
          </Text>
          <Text>R$ 200,00</Text>
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
