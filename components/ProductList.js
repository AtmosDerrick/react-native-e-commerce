import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "../product";

export default function ProductList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ title }) => <Text className="text-black">{title}</Text>}
    />
  );
}
