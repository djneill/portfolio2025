# Portfolio 2025

A modern, sleek, and stylish portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Dark Mode Design** - Sleek dark theme with cyan accents
- **Fully Responsive** - Works seamlessly on all devices
- **Component-Based Architecture** - Professional structure with reusable components
- **Easy to Update** - All content managed through TypeScript data files
- **Smooth Animations** - Polished transitions and hover effects
- **Polaroid Photo Gallery** - Unique CSS-only polaroid effect for conference photos
- **Infinite Scrolling Clients** - Horizontal auto-scrolling client logo showcase

## Project Structure

```
src/
├── components/
│   ├── sections/          # Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Clients.tsx
│   │   ├── Conferences.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── SectionTitle.tsx
│       └── ProjectCard.tsx
├── data/                  # Data files (easily editable)
│   ├── projects.ts
│   ├── clients.ts
│   └── conferences.ts
├── types/                 # TypeScript interfaces
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Customization

### Adding Projects

Edit [src/data/projects.ts](src/data/projects.ts):

```typescript
export const projects: Project[] = [
  {
    id: "1",
    tag: "Web App",
    title: "Your Project Title",
    img: "/images/work_images/project.webp",
    languages: "React, TypeScript, Node.js",
    link: "https://demo-link.com",
    repoLink: "https://github.com/username/repo",
    linkText: "View Demo",
    description: "Project description here...",
  },
  // Add more projects...
];
```

### Adding Clients

Edit [src/data/clients.ts](src/data/clients.ts):

```typescript
export const clients: Client[] = [
  {
    id: "1",
    name: "Company Name",
    logo: "/images/clients/logo.png",
    website: "https://company.com",
  },
  // Add more clients...
];
```

### Adding Conference Photos

Edit [src/data/conferences.ts](src/data/conferences.ts):

```typescript
export const conferencePhotos: ConferencePhoto[] = [
  {
    id: "1",
    image: "/images/conferences/photo.jpg",
    caption: "Event caption",
    event: "Event Name 2024",
  },
  // Add more photos...
];
```

### Personalizing Content

Update the following files with your information:

1. **[src/components/sections/Hero.tsx](src/components/sections/Hero.tsx)** - Your name and title
2. **[src/components/sections/About.tsx](src/components/sections/About.tsx)** - Bio and tech stack
3. **[src/components/sections/Contact.tsx](src/components/sections/Contact.tsx)** - Contact information and social links

## Image Setup

Create the following directories in your `public` folder:

```
public/
├── images/
│   ├── work_images/      # Project screenshots
│   ├── clients/          # Client logos
│   ├── conferences/      # Conference photos
│   └── profile.jpg       # Your profile picture
```

## Color Scheme

The portfolio uses a dark theme with cyan accents:

- Background: Slate (900, 800, 700)
- Primary Accent: Cyan (500, 400)
- Text: White and Slate variations

To customize colors, update the Tailwind classes in the components.

## License

MIT License - Feel free to use this template for your own portfolio!
# portfolio2025
