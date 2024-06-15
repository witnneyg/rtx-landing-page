/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "nvidia4090-home-background-mobile":
          "url('/public/geforce-rtx-4090-100vp-t.jpg')",
        "nvidia-dlss-video-bg": "url('/public/nvidia-dlss-video-bg.jpg')",
      },
    },
  },
  plugins: [],
};
