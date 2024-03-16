import Colors from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Layout() {
  const { onLogout } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.white,
        tabBarActiveTintColor: Colors.primary,
        headerRight: () => (
          <TouchableOpacity onPress={onLogout}>
            <Ionicons name="log-out-outline" size={24} color={Colors.white} />
          </TouchableOpacity>
        ),
        headerLeft: () => <DrawerToggleButton tintColor={Colors.white} />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "My Home Feed",
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="action"
        options={{
          tabBarLabel: "Action",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="alert-circle-outline" size={size} color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert("pressed on Alert!");
          },
        })}
      />
      <Tabs.Screen
        name="list"
        options={{
          headerShown: false,
          tabBarLabel: "List",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default Layout;
