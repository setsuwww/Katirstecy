import profile from "../../constants/profile.json";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: "https://katirstecy.vercel.app",
    image: `https://katirstecy.vercel.app${profile.avatar.src}`,
    sameAs: profile.socials.map((social) => social.url),
    jobTitle: "Full Stack Developer",
    description: profile.hero.text,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} Portfolio`,
    url: "https://katirstecy.vercel.app",
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
