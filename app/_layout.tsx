import Colors from "@/constants/Colors";
import { AuthProvider } from "@/context/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useEffect } from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <ExpoStatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.white,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="register"
          options={{
            title: "Register",
            headerBackTitle: "Login",
            headerStyle: {
              backgroundColor: Colors.background,
            },
          }}
        />
        <Stack.Screen
          name="privacy"
          options={{
            title: "Privacy Policy",
            presentation: "modal",
            headerStyle: {
              backgroundColor: Colors.background,
            },
          }}
        />
        <Stack.Screen
          name="(authenticated)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}

export default RootLayout;
