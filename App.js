import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView className="flex-1 items-center justify-center mt-8 bg-gray-200">
      <View className="flex-row justify-center w-full gap-5">
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text
          className={
            isEnabled
              ? " text-lg font-semibold text-gray-700 px-4"
              : " text-lg font-semibold text-gray-700 px-4"
          }>
          New Collection
        </Text>
      </View>
      <ProductList />
      <StatusBar className={isEnabled ? "text-white" : "text-black"} />
    </SafeAreaView>
  );
}
