export default function sitemap() {
  const baseUrl = "https://katier.vercel.app"; // Assuming this is the production URL, or I should use a generic one if unknown.

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
