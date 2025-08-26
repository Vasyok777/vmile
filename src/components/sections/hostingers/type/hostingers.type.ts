export interface HostingFeatures {
  uptime: string;
  wydajnosc: string;
  support: string;
  oferta: string;
  cena: string;
  bezpieczenstwo: string;
}

export interface HostingData {
  id: number;
  title: string;
  description: string;
  rank: string;
  logo: string;
  rating: string;
  website: string;
  bonus: string;
  features: HostingFeatures;
  pros?: string[];
  cons?: string[];
  additionalInfo?: string[];
}

export interface HostingItemProps {
  hosting: HostingData;
}