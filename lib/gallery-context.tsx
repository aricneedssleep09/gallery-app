import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  date: string;
  width: number;
  height: number;
  isFavorite: boolean;
}

interface GalleryContextType {
  images: GalleryImage[];
  favorites: GalleryImage[];
  toggleFavorite: (id: string) => Promise<void>;
  searchImages: (query: string) => GalleryImage[];
  isLoading: boolean;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

// Sample gallery data with beautiful images
const SAMPLE_IMAGES: GalleryImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    title: "Mountain Peak",
    date: "2024-01-15",
    width: 400,
    height: 400,
    isFavorite: false,
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    title: "Ocean Waves",
    date: "2024-01-14",
    width: 400,
    height: 400,
    isFavorite: false,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    title: "Forest Trail",
    date: "2024-01-13",
    width: 400,
    height: 400,
    isFavorite: false,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop",
    title: "Sunset Sky",
    date: "2024-01-12",
    width: 400,
    height: 400,
    isFavorite: false,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    title: "Desert Dunes",
    date: "2024-01-11",
    width: 400,
    height: 400,
    isFavorite: false,
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    title: "City Lights",
    date: "2024-01-10",
    width: 400,
    height: 400,
    isFavorite: false,
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop",
    title: "Aurora Borealis",
    date: "2024-01-09",
    width: 400,
    height: 400,
    isFavorite: false,
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    title: "Waterfall",
    date: "2024-01-08",
    width: 400,
    height: 400,
    isFavorite: false,
  },
];

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<GalleryImage[]>(SAMPLE_IMAGES);
  const [favorites, setFavorites] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from AsyncStorage
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const savedFavorites = await AsyncStorage.getItem("gallery_favorites");
        if (savedFavorites) {
          const favoriteIds = JSON.parse(savedFavorites);
          const updatedImages = images.map((img) => ({
            ...img,
            isFavorite: favoriteIds.includes(img.id),
          }));
          setImages(updatedImages);
          setFavorites(updatedImages.filter((img) => img.isFavorite));
        }
      } catch (error) {
        console.error("Error loading favorites:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const toggleFavorite = async (id: string) => {
    const updatedImages = images.map((img) =>
      img.id === id ? { ...img, isFavorite: !img.isFavorite } : img
    );
    setImages(updatedImages);

    const newFavorites = updatedImages.filter((img) => img.isFavorite);
    setFavorites(newFavorites);

    try {
      const favoriteIds = newFavorites.map((img) => img.id);
      await AsyncStorage.setItem("gallery_favorites", JSON.stringify(favoriteIds));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  };

  const searchImages = (query: string): GalleryImage[] => {
    if (!query.trim()) return images;
    return images.filter(
      (img) =>
        img.title.toLowerCase().includes(query.toLowerCase()) ||
        img.date.includes(query)
    );
  };

  return (
    <GalleryContext.Provider
      value={{
        images,
        favorites,
        toggleFavorite,
        searchImages,
        isLoading,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within GalleryProvider");
  }
  return context;
}
