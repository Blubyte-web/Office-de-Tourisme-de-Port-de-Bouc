import Newsletter from '../Newsletter';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function NewsletterExample() {
  return (
    <LanguageProvider>
      <Newsletter />
    </LanguageProvider>
  );
}
