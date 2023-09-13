import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const ProductCard = ({ image, category, title, price, description }) => {
  const [count, setCount] = useState(1);

  return (
    <View className="w-full bg-white rounded-3xl p-5 my-5">
      <Image source={{ uri: image }} className="w-full h-72" />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductCard;
