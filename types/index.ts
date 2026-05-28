// Product Types
export interface Product {
  id: number;
  name: string;
  category: 'coolant' | 'packaging' | 'acid';
  description: string;
  image: string;
  features: string[];
  specifications: Record<string, string>;
}

// Testimonial Types
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

// Stat Types
export interface Stat {
  value: string;
  label: string;
  icon: string;
}

// Achievement Types
export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

// Leadership Types
export interface Leader {
  name: string;
  role: string;
  experience: string;
  description: string;
  expertise: string[];
  image: string;
}

// Benefit Types
export interface Benefit {
  icon: string;
  color: 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'gray';
  title: string;
  description: string;
}

// Section Content Types
export interface SectionContent {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
}
