export const businessInfo = {
  // Basic Business Information
  name: "Preta Fit",
  alternateName: "Preta Fit Jacó",
  description: "Box líder en Jacó con programas de CrossFit, Brazilian Jiu-Jitsu y Wellness. Comunidad comprometida con el fitness y el crecimiento personal.",
  slogan: "Más que un gimnasio, una comunidad",
  
  // Business Types
  "@type": ["LocalBusiness", "GymAndFitnessClub", "SportsClub"],
  
  // Location Information
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jacó Centro",
    addressLocality: "Jacó",
    addressRegion: "Puntarenas",
    postalCode: "61101",
    addressCountry: "CR"
  },
  
  // Geo Coordinates for Jacó, Costa Rica (approximate center)
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.6139,
    longitude: -84.6286
  },
  
  // Contact Information
  telephone: "+506-7009-2140",
  email: "info@pretafitcr.com",
  url: "https://pretafitcr.com",
  
  // Business Hours (example schedule - update as needed)
  openingHours: [
    "Mo-Fr 05:30-21:00",
    "Sa 07:00-17:00", 
    "Su 08:00-16:00"
  ],
  
  // Services Offered
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Fitness",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CrossFit",
          description: "Entrenamiento funcional de alta intensidad"
        }
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Brazilian Jiu-Jitsu",
          description: "Arte marcial y deporte de combate"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Entrenamientos Funcionales",
          description: "Programas de bienestar integral"
        }
      }
    ]
  },
  
  // Social Media Profiles
  sameAs: [
    "https://www.instagram.com/pretafitjaco",
    "https://www.facebook.com/pretafitjaco",
    "https://wa.me/50670092140"
  ],
  
  // Business Features
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Equipamiento CrossFit completo",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification", 
      name: "Tatami para BJJ",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Entrenadores certificados",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Clases grupales",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Estacionamiento",
      value: true
    }
  ],
  
  // Price Range
  priceRange: "$$",
  
  // Languages Spoken
  availableLanguage: ["Spanish", "English"],
  
  // Image
  image: "/images/logo-pretafit.jpeg",
  logo: "/images/logo-pretafit.jpeg"
};

// Helper function to generate JSON-LD structured data
export function generateStructuredData(baseUrl: string = "https://pretafitcr.com") {
  return {
    "@context": "https://schema.org",
    "@type": businessInfo["@type"],
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    description: businessInfo.description,
    url: businessInfo.url,
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    address: businessInfo.address,
    geo: businessInfo.geo,
    openingHours: businessInfo.openingHours,
    hasOfferCatalog: businessInfo.hasOfferCatalog,
    sameAs: businessInfo.sameAs,
    amenityFeature: businessInfo.amenityFeature,
    priceRange: businessInfo.priceRange,
    availableLanguage: businessInfo.availableLanguage,
    image: new URL(businessInfo.image, baseUrl).href,
    logo: new URL(businessInfo.logo, baseUrl).href
  };
}
