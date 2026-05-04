# Contributing to Gallery App

Thank you for your interest in contributing to Gallery! We welcome contributions from everyone, whether it's bug reports, feature requests, documentation improvements, or code contributions.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on GitHub with the following information:

- **Clear description** — What is the bug? What did you expect to happen?
- **Steps to reproduce** — How can we reproduce the issue?
- **Device information** — What device and OS version are you using?
- **Screenshots or logs** — Include any relevant error messages or screenshots
- **Expo version** — What version of Expo are you running?

### Suggesting Features

We love feature ideas! Please open an issue describing:

- **What you want to do** — Describe the feature clearly
- **Why it's useful** — Explain the benefit to users
- **Possible implementation** — If you have ideas on how to implement it
- **Related issues** — Link to any related discussions or issues

### Submitting Pull Requests

1. **Fork the repository** — Create your own copy of the project on GitHub

2. **Clone your fork** — Download your fork to your local machine:
   ```bash
   git clone https://github.com/your-username/gallery-app.git
   cd gallery-app
   ```

3. **Create a feature branch** — Use a descriptive branch name:
   ```bash
   git checkout -b feature/add-image-filters
   ```

4. **Install dependencies** — Make sure you have all required packages:
   ```bash
   pnpm install
   ```

5. **Make your changes** — Implement your feature or fix

6. **Test your changes** — Verify everything works:
   ```bash
   pnpm dev
   ```

7. **Format and lint** — Ensure code quality:
   ```bash
   pnpm format
   pnpm lint
   ```

8. **Commit your changes** — Use clear, descriptive commit messages:
   ```bash
   git commit -m "feat: add image filters to detail view"
   ```

9. **Push to your fork** — Push your changes to GitHub:
   ```bash
   git push origin feature/add-image-filters
   ```

10. **Create a pull request** — Go to the original repository and create a PR with:
    - Clear title describing the change
    - Description of what you changed and why
    - Reference to any related issues
    - Screenshots or demos if applicable

## Development Setup

### Prerequisites

- Node.js 18 or higher
- pnpm (or npm/yarn)
- Git
- Expo CLI (optional, but recommended)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/gallery-app.git
cd gallery-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Project Structure

```
app/                    # Expo Router app directory
components/            # Reusable React components
lib/                   # Utilities, context, and helpers
assets/                # Images and static assets
```

### Key Files

- `app/(tabs)/index.tsx` — Home screen with gallery grid
- `lib/gallery-context.tsx` — Gallery state management
- `components/gallery-grid.tsx` — Grid display component
- `components/image-detail-view.tsx` — Full-screen image viewer
- `theme.config.js` — Color palette and design tokens

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types; use proper type annotations
- Export types and interfaces for reusability

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract complex logic into custom hooks
- Use descriptive component names

### Styling

- Use Tailwind CSS classes via NativeWind
- Define new colors in `theme.config.js`
- Avoid inline styles; use className instead
- Test both light and dark modes

### Naming Conventions

- **Components** — PascalCase (e.g., `GalleryGrid`)
- **Functions** — camelCase (e.g., `handleImagePress`)
- **Constants** — UPPER_SNAKE_CASE (e.g., `SAMPLE_IMAGES`)
- **Files** — kebab-case for components (e.g., `gallery-grid.tsx`)

### Comments

- Add comments for complex logic or non-obvious code
- Use JSDoc for functions and components
- Keep comments concise and up-to-date

## Testing

While the app doesn't have automated tests yet, please manually test:

- **iOS** — Test on iOS Simulator or device
- **Android** — Test on Android Emulator or device
- **Web** — Test in web browser
- **Light/Dark mode** — Verify theme switching works
- **Different screen sizes** — Test on various device sizes

## Documentation

If you add new features, please update:

- **README.md** — Add feature description if it's user-facing
- **Code comments** — Explain complex logic
- **Type definitions** — Document function parameters and return types

## Commit Messages

Follow conventional commits format:

```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

Examples:

```
feat(gallery): add image zoom capability
fix(favorites): persist favorites across app restarts
docs: update installation instructions
```

## Pull Request Process

1. **Update documentation** — Ensure README and comments are updated
2. **Test thoroughly** — Verify changes work on multiple platforms
3. **Keep commits clean** — Squash related commits if needed
4. **Be responsive** — Reply to review comments promptly
5. **Follow feedback** — Make requested changes and push updates

## Review Process

- At least one maintainer will review your PR
- We may request changes or ask clarifying questions
- Once approved, your PR will be merged
- Your contribution will be credited in the project

## Getting Help

- **Questions** — Open a discussion on GitHub
- **Need guidance** — Comment on the issue you're working on
- **Stuck** — Reach out to maintainers for help

## Recognition

Contributors are recognized in:

- **README.md** — In the acknowledgments section
- **Release notes** — When your changes are released
- **GitHub** — As a contributor on the repository

## License

By contributing to Gallery, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making Gallery better! 🎉
