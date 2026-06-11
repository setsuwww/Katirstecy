export default function manifest() {
  return {
    name: "Katirstecu Portfolio",
    short_name: "Katir",
    description:
      "Portfolio of Katirstecu, a Passionate Developer showing skills, projects, and hobbies.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2F2EB",
    theme_color: "#3d4430", // olive color from the design
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/maskable-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
