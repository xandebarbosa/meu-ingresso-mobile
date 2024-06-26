import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <View
        style={{
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("MyEvents")}>
          <Text style={styles.card}>Meus eventos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.card}>Dados pessoais</Text>
        </TouchableOpacity>

        <Button variant="outline" onPress={() => {}}>
          <Text>{"Sair".toUpperCase()}</Text>
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
    marginBottom: 20,
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
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
});
