import PracticalInfo from '../PracticalInfo';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function PracticalInfoExample() {
  return (
    <LanguageProvider>
      <PracticalInfo />
    </LanguageProvider>
  );
}
