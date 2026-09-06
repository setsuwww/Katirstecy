export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://katirstecu.vercel.app/sitemap.xml",
  };
}
