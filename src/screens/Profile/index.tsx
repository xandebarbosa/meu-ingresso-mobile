import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { signOut } from "../../features/auth/slice";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

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
          {user.name}
        </Text>
        <Text>
          <Icon name="phone" />{" "}
          {user.cellPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}
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

        <Button
          variant="outline"
          onPress={() => {
            dispatch(signOut());
            navigation.navigate("Home");
          }}
        >
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
