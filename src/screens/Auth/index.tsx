import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const AuthScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("PinCode");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Bem vindo ao meus ingressos</Text>
      </View>
      <View>
        <Input
          keyboardType="phone-pad"
          label="Telefone"
          placeholder="digite seu telefone aqui..."
        />
        <Button onPress={handleSubmit} disabled={loading} loading={loading}>
          Entrar
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
