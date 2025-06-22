# QuwwaHealth - React + Vite Website

A modern health and wellness website built with React and Vite.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── LoginForm.jsx   # Login form component
│   └── SignupForm.jsx  # Signup form component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── AboutUs.jsx     # About us page
│   ├── Programs.jsx    # Programs page
│   ├── ContactUs.jsx   # Contact page
│   ├── Blogs.jsx       # Blog listing page
│   ├── BlogPost.jsx    # Individual blog post page
│   ├── Auth.jsx        # Login/Signup page
│   ├── Terms.jsx       # Terms & Conditions page
│   └── Privacy.jsx     # Privacy Policy page
├── sections/           # Landing page sections
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services section
│   ├── Programs.jsx    # Programs section
│   ├── Testimonials.jsx # Testimonials section
│   └── Contact.jsx     # Contact section
├── styles/             # CSS styles
│   └── main.css        # Main stylesheet
└── assets/             # Static assets
    └── images/         # Image files
```

## Features

- **Landing Page**: Multiple sections including hero, about, services, programs, testimonials, and contact
- **About Us Page**: Company information and mission
- **Programs Page**: Detailed program offerings
- **Contact Page**: Contact form and information
- **Blog System**: Blog listing and individual blog post pages
- **Authentication**: Login/Signup page with shared left panel design
- **Legal Pages**: Terms & Conditions and Privacy Policy
- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean and professional design

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- React 18
- Vite
- React Router DOM
- CSS3 with Flexbox and Grid
- Responsive design principles

## Customization

The project is structured for easy customization:

- **Styling**: Modify `src/styles/main.css` for design changes
- **Components**: Update individual components in `src/components/`
- **Pages**: Modify page layouts in `src/pages/`
- **Sections**: Customize landing page sections in `src/sections/`

## Routing

The application uses React Router with the following routes:

- `/` - Home page
- `/about` - About Us page
- `/programs` - Programs page
- `/contact` - Contact page
- `/blogs` - Blog listing
- `/blog/:id` - Individual blog post
- `/auth` - Login/Signup page
- `/terms` - Terms & Conditions
- `/privacy` - Privacy Policy

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
