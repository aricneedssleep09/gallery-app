# Gallery - A Beautiful Open-Source Photo Gallery App

A modern, elegant photo gallery application built with React Native and Expo. Browse, organize, and manage your photos with a stunning user interface designed for both iOS and Android devices.

## Features

**Gallery Grid Display** — Browse your photos in a responsive 2-column grid layout with smooth scrolling and elegant image thumbnails. The grid adapts beautifully to different screen sizes and orientations.

**Full-Screen Image Viewer** — Tap any image to view it in full-screen mode with detailed metadata including image dimensions, capture date, and image title. Experience smooth transitions and intuitive navigation.

**Zoom Capabilities** — Pinch to zoom on images for detailed viewing, or double-tap to quickly zoom in and out. Perfect for examining fine details in your photos.

**Favorites System** — Mark your favorite photos with a heart icon. Your favorites are persisted locally on your device and can be accessed from the dedicated Favorites tab.

**Search Functionality** — Search through your gallery by image title or date. Real-time filtering helps you quickly find the photos you're looking for.

**Image Navigation** — Swipe left and right to navigate between images in detail view, or use the Previous/Next buttons for precise navigation.

**Share Functionality** — Share photos directly from the app using your device's native sharing capabilities.

**Dark Mode Support** — Automatic dark mode detection with beautiful color schemes optimized for both light and dark environments.

**Local Storage** — All favorites and preferences are stored locally on your device using AsyncStorage. No cloud account required.

## Technology Stack

The app is built with modern web technologies and best practices:

- **React Native 0.81** — Cross-platform mobile framework
- **Expo SDK 54** — Managed React Native development platform
- **TypeScript 5.9** — Type-safe JavaScript
- **NativeWind 4** — Tailwind CSS for React Native
- **React 19** — Latest React features and improvements
- **Expo Router 6** — File-based routing for navigation
- **Expo Image** — Optimized image loading and caching

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js 18+ and npm or pnpm
- Expo CLI (`npm install -g expo-cli`)
- Git

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/gallery-app.git
cd gallery-app
pnpm install
```

### Development

Start the development server with:

```bash
pnpm dev
```

This command starts both the Metro bundler and the development server. You can then:

- **View on Web** — Open http://localhost:8081 in your browser
- **View on iOS** — Press `i` in the terminal to open in iOS Simulator
- **View on Android** — Press `a` in the terminal to open in Android Emulator
- **View on Device** — Scan the QR code with Expo Go app on your device

### Building for Production

To build the Android APK:

```bash
eas build --platform android
```

To build for iOS:

```bash
eas build --platform ios
```

## Project Structure

The project follows a clean, modular architecture:

```
app/
  _layout.tsx              Root layout with providers
  (tabs)/
    _layout.tsx            Tab navigation configuration
    index.tsx              Home screen with gallery grid

components/
  gallery-grid.tsx         Reusable grid component
  image-detail-view.tsx    Full-screen image viewer
  screen-container.tsx     Safe area wrapper component
  ui/
    icon-symbol.tsx        Icon mapping for tab bar

lib/
  gallery-context.tsx      State management for gallery
  theme-provider.tsx       Theme context and dark mode
  utils.ts                 Utility functions
  trpc.ts                  API client configuration

assets/
  images/                  App icons and splash screens

tailwind.config.js         Tailwind CSS configuration
theme.config.js            Color palette and design tokens
app.config.ts              Expo configuration
```

## Architecture

The app uses React Context for state management, providing a clean separation between business logic and UI components. The `GalleryProvider` manages all gallery-related state including images, favorites, and search functionality.

**State Management** — React Context with AsyncStorage for persistence. No external state management library is required for this app's scope.

**Styling** — NativeWind (Tailwind CSS) for consistent, maintainable styling across all components. All colors are defined in `theme.config.js` and automatically support light and dark modes.

**Navigation** — Expo Router provides file-based routing with automatic tab bar management. The `(tabs)` directory structure creates the tab navigation automatically.

## Customization

### Adding Your Own Images

To add your own images to the gallery, edit the `SAMPLE_IMAGES` array in `lib/gallery-context.tsx`:

```typescript
const SAMPLE_IMAGES: GalleryImage[] = [
  {
    id: "1",
    url: "https://your-image-url.com/image.jpg",
    title: "Your Image Title",
    date: "2024-05-04",
    width: 400,
    height: 400,
    isFavorite: false,
  },
  // Add more images...
];
```

### Changing Colors

Edit `theme.config.js` to customize the color palette:

```javascript
const themeColors = {
  primary: { light: '#0a7ea4', dark: '#0a7ea4' },
  background: { light: '#ffffff', dark: '#151718' },
  // ... other colors
};
```

### Modifying the Grid Layout

To change the number of columns in the gallery grid, modify the `numColumns` prop in `app/(tabs)/index.tsx`:

```typescript
<GalleryGrid
  images={images}
  onImagePress={handleImagePress}
  numColumns={3}  // Change to 3 columns
/>
```

## Contributing

We welcome contributions from the community! Please follow these guidelines:

1. **Fork the repository** — Create your own copy of the project
2. **Create a feature branch** — `git checkout -b feature/your-feature-name`
3. **Make your changes** — Implement your feature or fix
4. **Write clear commit messages** — Describe what you changed and why
5. **Test thoroughly** — Ensure your changes work on both iOS and Android
6. **Submit a pull request** — Describe your changes and why they should be merged

### Code Style

- Use TypeScript for all new code
- Follow the existing code structure and naming conventions
- Use Tailwind CSS classes for styling
- Write meaningful variable and function names
- Add comments for complex logic

### Testing

Run the linter to check code quality:

```bash
pnpm lint
```

Format code automatically:

```bash
pnpm format
```

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details. You are free to use, modify, and distribute this software as long as you include the license notice.

## Troubleshooting

**Metro bundler not starting** — Try clearing the cache: `pnpm dev -- --clear`

**Images not loading** — Check that the image URLs are accessible and the device has internet connection

**Favorites not persisting** — Ensure AsyncStorage is properly installed: `pnpm install @react-native-async-storage/async-storage`

**Build errors on Android** — Make sure you have the latest Android SDK installed and ANDROID_HOME is set correctly

## Support

For issues, feature requests, or questions:

1. **Check existing issues** — Search GitHub Issues to see if your question has been answered
2. **Create a new issue** — Provide detailed information about your problem
3. **Join our community** — Discussions and feedback are welcome

## Roadmap

Future enhancements planned for the Gallery app:

- Cloud storage integration (Google Photos, iCloud)
- Advanced filtering and sorting options
- Image editing capabilities (crop, rotate, filters)
- Albums and collections organization
- Social sharing features
- Backup and sync across devices
- Performance optimizations for large galleries

## Acknowledgments

This project was built with Expo and React Native, leveraging the amazing open-source community. Special thanks to all contributors and users who help improve the app.

## Links

- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev)
- [NativeWind Documentation](https://www.nativewind.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Made with ❤️ by the Gallery App Community**
