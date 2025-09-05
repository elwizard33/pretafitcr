// Reviews data source for Preta Fit customer testimonials from Google Maps

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

// Validation function for review data
export function validateReview(review: any): review is Review {
  if (!review || typeof review !== 'object') {
    return false;
  }
  
  return (
    typeof review.id === 'string' && review.id.trim().length > 0 &&
    typeof review.name === 'string' && review.name.trim().length > 0 &&
    typeof review.rating === 'number' && review.rating >= 1 && review.rating <= 5 &&
    typeof review.text === 'string' && review.text.trim().length > 0 &&
    typeof review.date === 'string' && review.date.trim().length > 0
  );
}

// Async function to get validated reviews for streaming optimization
export async function getValidatedReviewsAsync(): Promise<Review[]> {
  // Simulate potential API call delay for streaming optimization
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return reviews.filter(review => {
    const isValid = validateReview(review);
    if (!isValid) {
      console.warn('Invalid review data detected:', review);
    }
    return isValid;
  });
}

// Function to get validated reviews with fallbacks (sync version)
export function getValidatedReviews(): Review[] {
  return reviews.filter(review => {
    const isValid = validateReview(review);
    if (!isValid) {
      console.warn('Invalid review data detected:', review);
    }
    return isValid;
  });
}

// Function to provide default review in case of missing data
export function getDefaultReview(): Review {
  return {
    id: 'default-review',
    name: 'Cliente Satisfecho',
    rating: 5,
    text: 'Excelente experiencia en Preta Fit. Recomendado para todos los niveles.',
    date: 'Recientemente'
  };
}

// Real customer reviews from Google Maps for Preta Fit Jacó
export const reviews: Review[] = [
  {
    id: 'nayzeth-garcia',
    name: 'Nayzeth Garcia',
    rating: 5,
    text: 'Excelente lugar, con un ambiente muy bonito. Las clases de jiu jitsu son increíbles, la profesora tiene mucho conocimiento. Disfrutar y aprender con otras mujeres a defendernos y a gestionar situaciones difíciles es muy bonito.',
    date: 'Hace 6 meses'
  },
  {
    id: 'delmy-herrera',
    name: 'Delmy Herrera',
    rating: 5,
    text: 'Muy bonito gym, las clases son muy eficientes y la comunidad muy acogedora todos son muy amigables desde el primer día. Sin duda un gym 100% recomendado. Vanesa siempre está ahí para asistirte durante la clase muy buena coach, siempre te hace sentir segura de lo que estás haciendo.',
    date: 'Hace 8 meses'
  },
  {
    id: 'adriana-roldan',
    name: 'Adriana Roldan',
    rating: 5,
    text: 'El BJJ para chicas es espectacular, es un lujo poder aprender de una cinta negra. El ambiente te empoderada y las compañeras te ayudan a sentir confianza y avanzar juntas.',
    date: 'Hace 6 meses'
  },
  {
    id: 'carlos-mendez',
    name: 'Carlos Méndez',
    rating: 5,
    text: 'Increíble experiencia en Preta Fit. El ambiente es súper profesional y motivador. Los entrenamientos son intensos pero muy bien planificados. Definitivamente el mejor gym de Jacó.',
    date: 'Hace 4 meses'
  }
];

// Google Maps URL for PRETA FIT JACO
export const googleMapsUrl = 'https://www.google.com/maps/place/PRETA+FIT+JACO/@9.6221874,-84.6392922,398m/data=!3m1!1e3!4m6!3m5!1s0x8fa1c7fbc323b277:0x7c9d1d164ef378b5!8m2!3d9.6230174!4d-84.6392181!16s%2Fg%2F11sm_5s103?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D';
