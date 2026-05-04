import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Platform,
  Share,
} from "react-native";
import { Image } from "expo-image";
import { GalleryImage } from "@/lib/gallery-context";
import { useColors } from "@/hooks/use-colors";
import { useGallery } from "@/lib/gallery-context";
import * as Haptics from "expo-haptics";

interface ImageDetailViewProps {
  image: GalleryImage;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  canNavigate: (direction: "prev" | "next") => boolean;
}

export function ImageDetailView({
  image,
  onClose,
  onNavigate,
  canNavigate,
}: ImageDetailViewProps) {
  const colors = useColors();
  const { toggleFavorite } = useGallery();
  const [scale, setScale] = useState(1);
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = () => {
    const now = Date.now();
    const delta = now - lastTap;

    if (delta < 300) {
      setScale(scale === 1 ? 2 : 1);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    setLastTap(now);
  };

  const handleFavorite = async () => {
    await toggleFavorite(image.id);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this beautiful image: ${image.title}`,
        url: image.url,
        title: image.title,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (canNavigate(direction)) {
      onNavigate(direction);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  return (
    <View
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <View
        className="flex-row items-center justify-between px-4 py-3"
        style={{ backgroundColor: colors.surface }}
      >
        <Pressable
          onPress={onClose}
          style={({ pressed }) => [pressed && { opacity: 0.6 }]}
          className="p-2"
        >
          <Text className="text-lg font-semibold text-foreground">✕</Text>
        </Pressable>

        <Text className="text-lg font-semibold text-foreground flex-1 text-center px-4">
          {image.title}
        </Text>

        <Pressable
          onPress={handleShare}
          style={({ pressed }) => [pressed && { opacity: 0.6 }]}
          className="p-2"
        >
          <Text className="text-lg">↗</Text>
        </Pressable>
      </View>

      {/* Image Container */}
      <ScrollView
        className="flex-1"
        scrollEnabled={scale > 1}
        maximumZoomScale={3}
        minimumZoomScale={1}
        zoomScale={scale}
        onScroll={() => {}}
        scrollEventThrottle={16}
      >
        <Pressable onPress={handleDoubleTap} className="flex-1 items-center justify-center">
          <Image
            source={{ uri: image.url }}
            contentFit="contain"
            className="w-full"
            style={{ aspectRatio: image.width / image.height }}
            placeholder={{ blurhash: "L5H2EC=PM|O@~pyDMdnm" }}
          />
        </Pressable>
      </ScrollView>

      {/* Image Info */}
      <View
        className="px-4 py-4"
        style={{ backgroundColor: colors.surface }}
      >
        <View className="gap-2">
          <Text className="text-sm text-muted">
            {image.width} × {image.height} px
          </Text>
          <Text className="text-sm text-muted">{image.date}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View
        className="flex-row items-center justify-between px-4 py-4 gap-2"
        style={{ backgroundColor: colors.background }}
      >
        {/* Previous Button */}
        <Pressable
          onPress={() => handleNavigate("prev")}
          disabled={!canNavigate("prev")}
          style={({ pressed }) => [
            {
              flex: 1,
              paddingVertical: 12,
              borderRadius: 12,
              backgroundColor: canNavigate("prev")
                ? colors.primary
                : colors.surface,
            },
            pressed && { opacity: 0.8 },
          ]}
          className="items-center justify-center"
        >
          <Text
            className="font-semibold"
            style={{
              color: canNavigate("prev") ? colors.background : colors.muted,
            }}
          >
            ← Prev
          </Text>
        </Pressable>

        {/* Favorite Button */}
        <Pressable
          onPress={handleFavorite}
          style={({ pressed }) => [
            {
              flex: 1,
              paddingVertical: 12,
              borderRadius: 12,
              backgroundColor: image.isFavorite ? colors.primary : colors.surface,
            },
            pressed && { opacity: 0.8 },
          ]}
          className="items-center justify-center"
        >
          <Text
            className="text-2xl"
            style={{
              color: image.isFavorite ? colors.background : colors.primary,
            }}
          >
            {image.isFavorite ? "♥" : "♡"}
          </Text>
        </Pressable>

        {/* Next Button */}
        <Pressable
          onPress={() => handleNavigate("next")}
          disabled={!canNavigate("next")}
          style={({ pressed }) => [
            {
              flex: 1,
              paddingVertical: 12,
              borderRadius: 12,
              backgroundColor: canNavigate("next")
                ? colors.primary
                : colors.surface,
            },
            pressed && { opacity: 0.8 },
          ]}
          className="items-center justify-center"
        >
          <Text
            className="font-semibold"
            style={{
              color: canNavigate("next") ? colors.background : colors.muted,
            }}
          >
            Next →
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
