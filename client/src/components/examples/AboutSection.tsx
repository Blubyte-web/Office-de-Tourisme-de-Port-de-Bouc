import AboutSection from '../AboutSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function AboutSectionExample() {
  return (
    <LanguageProvider>
      <AboutSection />
    </LanguageProvider>
  );
}
