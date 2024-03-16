import Colors from "@/constants/Colors";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot, Stack, usePathname, useRouter, useSegments } from "expo-router";
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

  const { token, initialized } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === "(authenticated)";

    if (token) {
      router.replace("/(authenticated)/(drawer)/(tabs)/home");
    } else if (!token && inAuthGroup) {
      router.replace("/");
    }
  }, [token, initialized]);

  if (!loaded || !initialized) {
    return <Slot />;
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
