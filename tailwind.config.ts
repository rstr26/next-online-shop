import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#10b981", // Replace this with your preferred primary color
          secondary: "#fcd34d", // You can also change other colors if needed
          accent: "#dc2626",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      }
    ],
  },
  plugins: [require('daisyui')],
};

export default config;
