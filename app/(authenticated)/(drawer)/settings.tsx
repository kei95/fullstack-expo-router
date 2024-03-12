import { DrawerActions } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

function SettingsScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Toggle" onPress={onToggle} />
    </View>
  );
}

export default SettingsScreen;
