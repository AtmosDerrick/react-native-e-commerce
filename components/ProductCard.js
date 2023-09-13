import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const ProductCard = ({ image, category, title, price, description }) => {
  const [count, setCount] = useState(1);

  return (
    <View className="w-full bg-white rounded-3xl p-5 my-5">
      <Image
        source={{ uri: image }}
        className="w-full h-72 "
        style={{ resizeMode: "contain" }}
      />
      <View className="mt-5">
        <Text className="text-sm opacity-60">{category}</Text>

        <Text>{title}</Text>
        <View className="flex-row justify-between">
          <View className="flex-row gap-4 items-center">
            <AntDesign
              name="minuscircleo"
              size={24}
              onPress={() => setCount(count - 1)}></AntDesign>
            <Text className="text-xl ">{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              onPress={() => setCount(count + 1)}></AntDesign>
          </View>
          <Text className="text-2xl font-extrabold">${price * count}</Text>
        </View>

        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductCard;
