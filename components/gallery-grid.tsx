import React from "react";
import {
  FlatList,
  Pressable,
  View,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import { Image } from "expo-image";
import { GalleryImage } from "@/lib/gallery-context";
import { useColors } from "@/hooks/use-colors";

interface GalleryGridProps {
  images: GalleryImage[];
  onImagePress: (image: GalleryImage, index: number) => void;
  numColumns?: number;
  isLoading?: boolean;
  contentContainerStyle?: ViewStyle;
}

export function GalleryGrid({
  images,
  onImagePress,
  numColumns = 2,
  isLoading = false,
  contentContainerStyle,
}: GalleryGridProps) {
  const colors = useColors();
  const gap = 8;
  const itemSize = (100 - (numColumns - 1) * gap / 100) / numColumns;

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (images.length === 0) {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <View className="text-center">
          <View
            className="w-20 h-20 rounded-full items-center justify-center mb-4"
            style={{ backgroundColor: colors.surface }}
          />
        </View>
      </View>
    );
  }

  return (
    <FlatList
      data={images}
      numColumns={numColumns}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      contentContainerStyle={[
        { paddingHorizontal: 8, paddingVertical: 8 },
        contentContainerStyle,
      ]}
      columnWrapperStyle={{ gap }}
      scrollIndicatorInsets={{ right: 1 }}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => onImagePress(item, index)}
          style={({ pressed }) => [
            {
              flex: 1 / numColumns,
              aspectRatio: 1,
              marginHorizontal: gap / 2,
            },
            pressed && { opacity: 0.7 },
          ]}
        >
          <View
            className="flex-1 rounded-2xl overflow-hidden"
            style={{ backgroundColor: colors.surface }}
          >
            <Image
              source={{ uri: item.url }}
              contentFit="cover"
              className="flex-1"
              placeholder={{ blurhash: "L5H2EC=PM|O@~pyDMdnm" }}
              transition={300}
            />
          </View>
        </Pressable>
      )}
    />
  );
}
