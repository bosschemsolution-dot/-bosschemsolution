import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Engine Coolant Manufacturer in Surat | Boss Chem Solution",
  description: "Boss Chem Solution - Leading engine coolant manufacturer in Surat, Gujarat. Premium radiator coolant, antifreeze coolant, distilled water for battery. ISO certified, 15+ years experience.",
  alternates: {
    canonical: "https://bosschemsolution.com",
  },
};

export default function Home() {
  return <HomeClient />;
}
