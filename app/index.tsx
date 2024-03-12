import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function Screen() {
  return (
    <View style={styles.body}>
      <Image
        source={{ uri: "https://galaxies.dev/img/logos/logo--blue.png" }}
        style={styles.image}
      />
      <Link
        href={"/(authenticated)/(drawer)/(tabs)/home"}
        style={{ color: Colors.white }}
        asChild
      >
        <TouchableOpacity>
          <Text style={{ color: Colors.white }}>Login</Text>
        </TouchableOpacity>
      </Link>

      <Link href={"/register"} style={{ color: Colors.white }} asChild>
        <TouchableOpacity>
          <Text style={{ color: Colors.white }}>Register</Text>
        </TouchableOpacity>
      </Link>

      <Link href={"/privacy"} style={{ color: Colors.white }} asChild>
        <TouchableOpacity>
          <Text style={{ color: Colors.white }}>Privacy</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
});

export default Screen;
