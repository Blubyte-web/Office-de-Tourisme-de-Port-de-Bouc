import Navigation from '../Navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <div className="pt-32 px-4">
            <p className="text-muted-foreground text-center">Navigation component example</p>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
