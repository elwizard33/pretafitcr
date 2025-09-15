// Plans data source for Preta Fit membership options

export interface Plan {
  id: string;
  name: string;
  price: number; // Price in USD
  sessionsPerWeek: number;
  validity: string;
  note?: string;
  features?: string[];
  popular?: boolean;
  isCouplePrice?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'student',
    name: 'Pack colegiales',
    price: 35.0,
    sessionsPerWeek: 3,
    validity: '1 Mes',
    note: 'Plan especial para estudiantes',
    features: [
      'Clases Grupales',
      'Válido por 1 mes',
      '3 reservaciones por semana',
    ],
  },
  {
    id: 'three-times',
    name: 'Paquete 3 veces por semana',
    price: 72.0,
    sessionsPerWeek: 3,
    validity: '1 Mes',
    features: [
      'Clases Grupales',
      'Válido por 1 mes',
      '3 reservaciones por semana',
    ],
  },
  {
    id: 'three-times-couple',
    name: 'Paquete 3 veces por semana - precio para parejas',
    price: 62.0,
    sessionsPerWeek: 3,
    validity: '1 Mes',
    isCouplePrice: true,
    features: [
      'Clases Grupales',
      'Válido por 1 mes',
      '3 reservaciones por semana',
      'Precio especial para parejas',
    ],
  },
  {
    id: 'four-times',
    name: 'Paquete 4 veces por semana',
    price: 82.0,
    sessionsPerWeek: 4,
    validity: '1 Mes',
    popular: true,
    features: [
      'Clases Grupales',
      'Válido por 1 mes',
      '4 reservaciones por semana',
    ],
  },
  {
    id: 'four-times-couple',
    name: 'Paquete 4 veces por semana - precio para parejas',
    price: 72.0,
    sessionsPerWeek: 4,
    validity: '1 Mes',
    isCouplePrice: true,
    features: [
      'Clases Grupales',
      'Válido por 1 mes',
      '4 reservaciones por semana',
      'Precio especial para parejas',
    ],
  },
  {
    id: 'unlimited',
    name: 'Paquete ilimitado',
    price: 100.0,
    sessionsPerWeek: 6, // 6 reservations per week as shown in image
    validity: '1 Mes',
    features: [
      'Clases Grupales',
      'Válido por 1 mes',
      '6 reservaciones por semana',
    ],
  },
  {
    id: 'unlimited-couple',
    name: 'Paquete ilimitado - precio para parejas',
    price: 90.0,
    sessionsPerWeek: 6,
    validity: '1 Mes',
    isCouplePrice: true,
    features: [
      'Clases Grupales',
      'Válido por 1 mes',
      '6 reservaciones por semana',
      'Precio especial para parejas',
    ],
  },
];

// Helper functions for working with plans
export const getPlanById = (id: string): Plan | undefined => {
  return plans.find(plan => plan.id === id);
};

export const getPopularPlan = (): Plan | undefined => {
  return plans.find(plan => plan.popular);
};

export const getPlansByPriceRange = (
  minPrice: number,
  maxPrice: number
): Plan[] => {
  return plans.filter(plan => plan.price >= minPrice && plan.price <= maxPrice);
};

export const getCouplePlans = (): Plan[] => {
  return plans.filter(plan => plan.isCouplePrice);
};

export const getIndividualPlans = (): Plan[] => {
  return plans.filter(plan => !plan.isCouplePrice);
};
