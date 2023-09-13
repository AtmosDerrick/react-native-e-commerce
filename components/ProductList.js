import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "../product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
}
