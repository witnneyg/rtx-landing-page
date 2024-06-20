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
        "nvidia4090-home-background-xl":
          "url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-rtx-4090-100vp-l@2x.jpg')",
        "nvidia4090-home-background-t":
          "url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-rtx-4090-100vp-t.jpg')",
        "nvidia-arquitetura-background":
          "url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4080/geforce-rtx-super-architecture-bm-xl770-d.jpg')",
      },
    },
  },
  plugins: [],
};
