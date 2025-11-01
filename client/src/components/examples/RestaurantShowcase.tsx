import RestaurantShowcase from '../RestaurantShowcase';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function RestaurantShowcaseExample() {
  return (
    <LanguageProvider>
      <RestaurantShowcase />
    </LanguageProvider>
  );
}
