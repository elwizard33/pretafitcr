export const businessInfo = {
  // Basic Business Information
  name: "Preta Fit",
  alternateName: "Preta Fit Jacó",
  description: "Box líder en Jacó con programas de CrossFit, Brazilian Jiu-Jitsu y Wellness. Comunidad comprometida con el fitness y el crecimiento personal.",
  slogan: "Más que un gimnasio, una comunidad",
  
  // Business Types - Enhanced with specific Schema.org types
  "@type": ["LocalBusiness", "GymAndFitnessClub", "SportsClub", "HealthClub", "ExerciseGym"],
  
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
  logo: "/images/logo-pretafit.jpeg",
  
  // Enhanced business properties
  foundingDate: "2020",
  areaServed: {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 9.6139,
      "longitude": -84.6286
    },
    "geoRadius": "50000"
  },
  
  // Payment methods accepted
  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Sinpe Móvil"],
  
  // Additional business identifiers
  vatID: "CR-3-101-123456", // Example VAT ID format for Costa Rica
  taxID: "3-101-123456"
};

// FAQ data for structured markup
export const faqData = [
  {
    question: "¿Necesito experiencia previa?",
    answer: "No. Adaptamos movimientos y volumen para todos los niveles. Comenzamos con fundamentos sólidos."
  },
  {
    question: "¿Hay restricciones de edad?",
    answer: "Aceptamos miembros desde los 16 años. Menores de 18 requieren firma de tutor."
  },
  {
    question: "¿Hay estacionamiento?",
    answer: "Sí, tenemos espacio de estacionamiento disponible en las instalaciones."
  },
  {
    question: "¿Puedo congelar mi membresía si me lesiono o viajo?",
    answer: "No puedes congelar ni posponer tu membresía."
  },
  {
    question: "¿Ofrecen clase de prueba?",
    answer: "Sí, ofrecemos clase intro evaluativa sin compromiso para nuevos miembros."
  }
];

// Generate FAQ Schema
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate breadcrumb schema for navigation
export function generateBreadcrumbSchema(pageTitle: string, url: string) {
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://pretafitcr.com/"
    }
  ];

  if (pageTitle !== "Inicio" && pageTitle !== "Preta Fit | CrossFit · BJJ · Comunidad") {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageTitle,
      "item": url
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  };
}

// Generate review schema
export function generateReviewSchema(reviews: any[]) {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  };

  const reviewSchemas = reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": review.text,
    "datePublished": review.date
  }));

  return {
    aggregateRating,
    reviews: reviewSchemas
  };
}

// Helper function to generate enhanced JSON-LD structured data
export function generateStructuredData(baseUrl: string = "https://pretafitcr.com", reviews?: any[]) {
  const baseSchema = {
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
    logo: new URL(businessInfo.logo, baseUrl).href,
    foundingDate: businessInfo.foundingDate,
    areaServed: businessInfo.areaServed,
    paymentAccepted: businessInfo.paymentAccepted,
    vatID: businessInfo.vatID,
    taxID: businessInfo.taxID
  };

  // Add review data if provided
  if (reviews && reviews.length > 0) {
    const reviewSchema = generateReviewSchema(reviews);
    return {
      ...baseSchema,
      aggregateRating: reviewSchema.aggregateRating,
      review: reviewSchema.reviews
    };
  }

  return baseSchema;
}
