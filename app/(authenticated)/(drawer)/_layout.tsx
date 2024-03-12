import Colors from "@/constants/Colors";
import { Drawer } from "expo-router/drawer";

function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: Colors.white,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false, drawerLabel: "Home" }}
      />
      <Drawer.Screen name="settings" options={{ drawerLabel: "Settings" }} />
    </Drawer>
  );
}

export default Layout;
