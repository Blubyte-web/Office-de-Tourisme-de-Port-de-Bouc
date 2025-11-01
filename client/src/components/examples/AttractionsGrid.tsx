import AttractionsGrid from '../AttractionsGrid';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function AttractionsGridExample() {
  return (
    <LanguageProvider>
      <AttractionsGrid />
    </LanguageProvider>
  );
}
