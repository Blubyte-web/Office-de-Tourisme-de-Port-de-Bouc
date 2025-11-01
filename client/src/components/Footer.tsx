import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#accueil', labelFr: 'Accueil', labelEn: 'Home' },
    { href: '#a-propos', labelFr: 'À Propos', labelEn: 'About' },
    { href: '#attractions', labelFr: 'Attractions', labelEn: 'Attractions' },
    { href: '#restaurants', labelFr: 'Restaurants', labelEn: 'Restaurants' },
    { href: '#evenements', labelFr: 'Événements', labelEn: 'Events' },
    { href: '#galerie', labelFr: 'Galerie', labelEn: 'Gallery' },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-footer-title">
              Port-de-Bouc Tourism
            </h3>
            <p className="text-muted-foreground mb-4">
              {t(
                'Votre joyau méditerranéen. Découvrez la beauté de la côte provençale.',
                'Your Mediterranean gem. Discover the beauty of the Provençal coast.'
              )}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('Liens Rapides', 'Quick Links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.labelEn.toLowerCase()}`}
                  >
                    {t(link.labelFr, link.labelEn)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Place de la Mairie, 13110 Port-de-Bouc, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+33 (0)4 42 06 27 28</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">tourisme@portdebouc.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Port-de-Bouc Tourism. {t('Tous droits réservés.', 'All rights reserved.')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('Site créé par', 'Site created by')}{' '}
            <a href="#" className="text-primary hover:underline">
              Bluebyte
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
