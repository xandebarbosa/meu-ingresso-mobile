import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { PinInputs } from "../../components/PinInput";
import { useAppDispatch } from "../../features/hooks";
import { signIn } from "../../features/auth/slice";

export const PinCodeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);

        const data = {
          user: {
            name: "John Doe",
            cellPhone: "14998762262",
          },
          token: "123456",
        };
        dispatch(signIn(data));
        navigation.navigate("Home");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Digite seu código de acesso</Text>
      </View>
      <View>
        <PinInputs />
        <Button onPress={handleSubmit} disabled={loading} loading={loading}>
          Verificar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
