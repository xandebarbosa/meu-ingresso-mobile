import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const Avatar = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
