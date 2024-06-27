import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../features/hooks";

export const Avatar = () => {
  const navigation = useNavigation();
  const isLogged = useAppSelector((state) => state.auth.token !== "");

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(isLogged ? "Profile" : "Auth")}
    >
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.container}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    objectFit: "fill",
  },
});
