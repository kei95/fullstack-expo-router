import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="details/[id]"
        options={{
          headerTintColor: Colors.white,
          headerStyle: { backgroundColor: Colors.background },
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
