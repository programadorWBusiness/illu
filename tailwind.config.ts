import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beyonders: ['Beyonders', 'sans-serif'],
        conthrax: ['Conthrax', 'sans-serif'],
        nexa: ['Nexa', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logo": "url('/images/logo.svg')",
        "containers": "url('/images/container.jpg')",
        "illumer": "url('/images/illumer-logo.webp')",
        "logo-1": "url('/images/logo-1.webp')",
        "logo-2": "url('/images/logo-2.webp')",
        "logo-3": "url('/images/logo-3.webp')",
        "logo-4": "url('/images/logo-4.webp')",
        "logo-5": "url('/images/logo-5.webp')",
        "logo-6": "url('/images/logo-6.webp')",
        "logo-7": "url('/images/logo-7.webp')",
        "products": "url('/images/products-bg.webp')",
        "products-mobile": "url('/images/products-mobile.png')",
        "icon-1": "url('/images/icon-1.webp')",
        "icon-2": "url('/images/icon-2.webp')",
        "icon-3": "url('/images/icon-3.webp')",
      },
      colors: {
        "bluedark" : "#002D3A",
        "bluelight" : "#36A9E1",
        "redclear" : "#E42229",
        "browndark" : "#363636"
      }
    },
  },
  plugins: [],
};
export default config;
