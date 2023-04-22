import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const CATEGORIES = [ 
  "Clothing",
  "Shoes",
  "Acessories",
  "T-Shirts",
  "Sneakers",
]

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

  interface IconsProps {
    className?: string;
  }
}

const HomeScreen = () => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
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
            <Text className="text-lg font-bold mb-1" numberOfLines={1}>
              Hi Bruno 👋
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

        <View className="flex flex-row px-6 gap-3 mt-6 mb-6">
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
            <Text className="flex text-base text-slate-400 opacity-50">
              Busca
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              backgroundColor: "#000",
            }}
          >
            <Icons
              name="tune"
              size={24}
              color={"#fff"}
              className="text-white"
            />
          </TouchableOpacity>
        </View>

        {/* Collections */}

        <View className="px-6">
          <View className="flex flex-row items-center justify-between mb-3">
            <Text className="text-xl font-bold">New Collections</Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: "row", height: 200, gap: 12}}>
            
              <Card />

            <View style={{ flex: 1, gap: 12 }}>
              <Card />
              <Card />
            </View>
          </View>
        </View>

        {/* Categories */}

        <FlatList data={CATEGORIES} horizontal showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 12,
        }}
        renderItem={({item, index}) => {
        const isSelected = categoryIndex === index;
        return ( 
        <TouchableOpacity onPress={() => setCategoryIndex(index)} style={{
          backgroundColor: isSelected ? colors.primary : colors.card,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 100,
          borderWidth: isSelected ? 0 : 1,
          borderColor: colors.border,
          marginTop: 18
        }}>
          <Text style={{
            color: isSelected ? colors.background : colors.text,
            fontWeight: "600",
            fontSize: 16,
            opacity: isSelected ? 1 : 0.5
          }}>{item}</Text>
        </TouchableOpacity>
        )}} 
      />

      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
      }}
    >
      <Image
        source={require("../assets/image-1.jpg")}
        resizeMode="cover"
        // style={StyleSheet.absoluteFill}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />

      <View className="absolute left-4 top-4 px-4 py-3 bg-black opacity-25 rounded-full">
        <Text className="text-white text-base font-medium">$130</Text>
      </View>
    </View>
  );
};
