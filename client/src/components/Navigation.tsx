import { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: '#accueil', labelFr: 'Accueil', labelEn: 'Home' },
    { href: '#a-propos', labelFr: 'À Propos', labelEn: 'About' },
    { href: '#attractions', labelFr: 'Attractions', labelEn: 'Attractions' },
    { href: '#restaurants', labelFr: 'Restaurants', labelEn: 'Restaurants' },
    { href: '#evenements', labelFr: 'Événements', labelEn: 'Events' },
    { href: '#galerie', labelFr: 'Galerie', labelEn: 'Gallery' },
    { href: '#contact', labelFr: 'Contact', labelEn: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-serif font-bold text-primary" data-testid="logo-text">
              Port-de-Bouc
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                data-testid={`link-nav-${item.labelEn.toLowerCase()}`}
              >
                {language === 'fr' ? item.labelFr : item.labelEn}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              data-testid="button-language-toggle"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-foreground/80 hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${item.labelEn.toLowerCase()}`}
                >
                  {language === 'fr' ? item.labelFr : item.labelEn}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  data-testid="button-mobile-language"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'fr' ? 'EN' : 'FR'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={toggleTheme}
                  data-testid="button-mobile-theme"
                >
                  {theme === 'light' ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                  {theme === 'light' ? t('Sombre', 'Dark') : t('Clair', 'Light')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
