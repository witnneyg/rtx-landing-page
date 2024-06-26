/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nvidia-green": "#76b900",
        "nvidia-green-hover": "#5a8c00",
      },
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
        "nvidia-raytracing-desktop-bg": "url('/public/rtxBg.jpg')",
        "nvidia-raytracing-d":
          "url('https://images.nvidia.com/aem-dam/Solutions/geforce/ray-tracing/portal-rtx/geforce-ray-tracing-portal-rtx-off-1536.webp')",
        "nvidia-dlss-video-bg-t":
          "url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/nvidia-dlss-video-xlrg-hero-background-bb770-d.jpg')",
        "creative-background-t":
          "url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/creative-background-bb800-t.jpg')",
        "nvidia-reflex-bg":
          "url('https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/nvidia-reflex-background-image-spec2-bb770_550-l@2x.jpg')",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        d: "2540px",
      },
    },
  },
  plugins: [],
};
