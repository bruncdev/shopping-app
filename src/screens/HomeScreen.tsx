import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

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

  interface TouchableOpacityProps {
    className?: string;
  }
}

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <SafeAreaView className="mt-6">
        {/* Header */}
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
            <Text className="opacity-75 text-xs mr-8">
              Discover fashion that suit your style
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Icons name="notifications" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Search */}

        <View className="flex flex-row px-6 gap-3 mt-6">
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              gap: 12,
              flexDirection: "row",
            }}
          >
            <Icons
              name="search"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
