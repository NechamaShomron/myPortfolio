# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js optimization
- 🎯 Professional sections: Hero, About, Experience, Projects, Skills, Contact
- 📧 Contact form with validation
- 🌟 Smooth scrolling navigation
- 🎭 Framer Motion animations

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`components/Hero.tsx`):
   - Update the main heading and description
   - Modify the tech icons and descriptions

2. **About Section** (`components/About.tsx`):
   - Update the profile description
   - Modify the feature cards

3. **Experience Section** (`components/Experience.tsx`):
   - Update employment history
   - Add your achievements and responsibilities

4. **Projects Section** (`components/Projects.tsx`):
   - Add your projects
   - Update project descriptions and technologies

5. **Skills Section** (`components/Skills.tsx`):
   - Update skill categories and proficiency levels
   - Add or remove technologies

6. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Modify the contact form behavior

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `styles/globals.css`
- **Animations**: Modify animation settings in Tailwind config

### Contact Form

The contact form currently simulates submission. To make it functional:

1. Set up a backend API endpoint
2. Update the form submission logic in `components/Contact.tsx`
3. Add email service integration (e.g., Nodemailer, SendGrid)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The built files will be in the `.next` folder.

## Project Structure

```
portfolio/
├── components/          # React components
│   ├── Layout.tsx      # Main layout with navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── Contact.tsx     # Contact form
├── pages/              # Next.js pages
│   └── index.tsx       # Home page
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports
├── public/             # Static assets
└── ...config files
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out!
