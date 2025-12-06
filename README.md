[![lazypr](./public/og-image.webp)](https://lazypr.raulcarini.dev)

Official documentation website for [LazyPR](https://github.com/r4ultv/lazypr) - an AI-powered CLI tool that generates professional pull request titles and descriptions from your git commits.

## About LazyPR

LazyPR is a command-line tool that analyzes your git commits and leverages AI (Groq or Cerebras) to automatically generate clean, professional pull request titles and descriptions. No more manual PR writing!

### Key Features

- **Multi-provider AI support**: Choose between Groq and Cerebras
- **Smart filtering**: Automatically excludes merge commits, dependency updates, and formatting changes
- **PR template integration**: Detects and uses templates from `.github` folder
- **Clipboard integration**: Copy generated content directly
- **GitHub CLI support**: Generate ready-to-use `gh pr create` commands
- **Multi-language output**: Supports 12+ languages including English, Spanish, Portuguese, French, German, Italian, Japanese, Korean, Chinese, Russian, Dutch, Polish, and Turkish
- **Customizable AI context**: Guide the AI's tone and style with custom instructions

## Documentation Site

This repository contains the documentation website built with:

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[Fumadocs](https://fumadocs.dev/)** - Modern documentation framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js >= 20
- npm, pnpm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/r4ultv/lazypr-website.git
cd lazypr-website

# Install dependencies
bun install
```

### Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the documentation site for production:

```bash
bun run build
```

### Type Checking

Run type checking:

```bash
bun run types:check
```

## Project Structure

```
lazypr-website/
├── app/                    # Next.js app directory
│   ├── (home)/            # Landing page and home routes
│   └── docs/              # Documentation pages
├── content/               # MDX documentation content
├── components/            # React components
├── lib/                   # Utility functions and configurations
│   ├── source.ts         # Content source adapter
│   └── layout.shared.tsx # Shared layout options
├── public/               # Static assets
└── source.config.ts      # Fumadocs MDX configuration
```

### Key Files

- `lib/source.ts`: Content source adapter using Fumadocs [`loader()`](https://fumadocs.dev/docs/headless/source-api)
- `lib/layout.shared.tsx`: Shared options for layouts
- `source.config.ts`: Fumadocs MDX configuration for frontmatter schema and other options

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages |
| `app/docs`                | The documentation layout and pages                    |
| `app/api/search/route.ts` | The Route Handler for search                          |

## Contributing

Contributions are welcome! If you find any issues with the documentation or want to add improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Documentation Content

The documentation content is written in MDX and located in the `content/` directory. To add or modify documentation:

1. Navigate to the `content/` directory
2. Create or edit `.mdx` files
3. Follow the existing structure and frontmatter format
4. Preview your changes locally with `npm run dev`

For more information about customizing the documentation, check out the [Fumadocs MDX documentation](https://fumadocs.dev/docs/mdx).

## Links

- **LazyPR CLI Repository**: [github.com/r4ultv/lazypr](https://github.com/r4ultv/lazypr)
- **Documentation Website**: [lazypr.raulcarini.dev](https://lazypr.raulcarini.dev)
- **NPM Package**: [npmjs.com/package/lazypr](https://www.npmjs.com/package/lazypr)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Fumadocs Documentation](https://fumadocs.dev) - Learn about Fumadocs
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS

## License

MIT © Raul Carini

---

**Note**: This is the documentation website repository. For the LazyPR CLI tool itself, visit [github.com/r4ultv/lazypr](https://github.com/r4ultv/lazypr).
