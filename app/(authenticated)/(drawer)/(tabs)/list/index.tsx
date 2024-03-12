import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ListScreen() {
  return (
    <View style={styles.body}>
      <Text>List</Text>
      <Link href={"/(authenticated)/(drawer)/(tabs)/list/5?query=Foo"} asChild>
        <Button title={"Go to #5"}></Button>
      </Link>
      <Link href={"/(authenticated)/details/5?query=Foo"} asChild>
        <Button title={"Go to #5 outside"}></Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
