import profile from "../../constants/profile.json";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: "https://katirstecu.vercel.app",
    image: `https://katirstecu.vercel.app${profile.avatar.src}`,
    sameAs: profile.socials.map((social) => social.url),
    jobTitle: "Full Stack Developer",
    description: profile.hero.text,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} Portfolio`,
    url: "https://katirstecu.vercel.app",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
