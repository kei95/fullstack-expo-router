import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

export default function IdScreen() {
  const { id, query } = useLocalSearchParams<{ id: string; query?: string }>();

  return (
    <View>
      <Stack.Screen
        options={{
          title: `List #${id} - outside`,
          headerBackTitleVisible: false,
        }}
      />
      <Text>My Id: {id}</Text>
      <Text>My query: {query}</Text>
    </View>
  );
}
