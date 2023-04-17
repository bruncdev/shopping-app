import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface ImageProps {
    className?: string;
  }
}

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View className="px-6 flex flex-row items-center gap-2">
          <Image
            source={{
              uri: AVATAR_URL,
            }}
            className="w-14 h-14 aspect-square rounded-full"
            resizeMode="cover"
          />
          <View className="flex">
            <Text className="text-lg font-bold mb-2" numberOfLines={1}>
              Olá Bruno 👋
            </Text>
            <Text className="opacity-75 text-xs">
              Descubra a moda que mais se adequa ao seu estilo!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
