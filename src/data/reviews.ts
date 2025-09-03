// Reviews data source for Preta Fit customer testimonials from Google Maps

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
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
