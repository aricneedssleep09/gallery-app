import { useState, useCallback } from "react";
import { View, RefreshControl } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { GalleryGrid } from "@/components/gallery-grid";
import { ImageDetailView } from "@/components/image-detail-view";
import { useGallery, GalleryImage } from "@/lib/gallery-context";
import { useColors } from "@/hooks/use-colors";

export default function HomeScreen() {
  const { images, isLoading } = useGallery();
  const colors = useColors();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const handleImagePress = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" ? selectedIndex - 1 : selectedIndex + 1;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(images[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  const canNavigate = (direction: "prev" | "next") => {
    if (direction === "prev") return selectedIndex > 0;
    return selectedIndex < images.length - 1;
  };

  if (selectedImage) {
    return (
      <ImageDetailView
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onNavigate={handleNavigate}
        canNavigate={canNavigate}
      />
    );
  }

  return (
    <ScreenContainer className="p-0" edges={["top", "left", "right"]}>
      <GalleryGrid
        images={images}
        onImagePress={handleImagePress}
        isLoading={isLoading}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </ScreenContainer>
  );
}
