import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Car, Train, Plane, MapPin, HelpCircle, Sun } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PracticalInfo() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sections = [
    {
      value: 'getting-there',
      icon: Car,
      titleFr: 'Comment S\'y Rendre',
      titleEn: 'How to Get There',
      contentFr: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <Car className="w-4 h-4" /> En Voiture
            </h4>
            <p className="text-muted-foreground">
              Depuis Marseille: A55 direction Martigues, sortie Port-de-Bouc (30 minutes)
            </p>
          </div>
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <Train className="w-4 h-4" /> En Train
            </h4>
            <p className="text-muted-foreground">
              Gare SNCF de Port-de-Bouc, liaisons régulières depuis Marseille et Miramas
            </p>
          </div>
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <Plane className="w-4 h-4" /> En Avion
            </h4>
            <p className="text-muted-foreground">
              Aéroport Marseille-Provence (40 km), puis bus ou location de voiture
            </p>
          </div>
        </div>
      ),
      contentEn: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <Car className="w-4 h-4" /> By Car
            </h4>
            <p className="text-muted-foreground">
              From Marseille: A55 direction Martigues, exit Port-de-Bouc (30 minutes)
            </p>
          </div>
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <Train className="w-4 h-4" /> By Train
            </h4>
            <p className="text-muted-foreground">
              Port-de-Bouc SNCF station, regular connections from Marseille and Miramas
            </p>
          </div>
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <Plane className="w-4 h-4" /> By Plane
            </h4>
            <p className="text-muted-foreground">
              Marseille-Provence Airport (40 km), then bus or car rental
            </p>
          </div>
        </div>
      ),
    },
    {
      value: 'tourist-office',
      icon: MapPin,
      titleFr: 'Office de Tourisme',
      titleEn: 'Tourist Office',
      contentFr: (
        <div className="space-y-3">
          <p><strong>Adresse:</strong> Place de la Mairie, 13110 Port-de-Bouc</p>
          <p><strong>Téléphone:</strong> +33 (0)4 42 06 27 28</p>
          <p><strong>Email:</strong> tourisme@portdebouc.fr</p>
          <p><strong>Horaires:</strong> Lundi-Vendredi: 9h-12h30, 14h-17h30</p>
        </div>
      ),
      contentEn: (
        <div className="space-y-3">
          <p><strong>Address:</strong> Place de la Mairie, 13110 Port-de-Bouc</p>
          <p><strong>Phone:</strong> +33 (0)4 42 06 27 28</p>
          <p><strong>Email:</strong> tourisme@portdebouc.fr</p>
          <p><strong>Hours:</strong> Monday-Friday: 9am-12:30pm, 2pm-5:30pm</p>
        </div>
      ),
    },
    {
      value: 'best-time',
      icon: Sun,
      titleFr: 'Meilleure Période pour Visiter',
      titleEn: 'Best Time to Visit',
      contentFr: (
        <div className="space-y-3">
          <p><strong>Printemps (Mars-Mai):</strong> Températures agréables, moins de touristes</p>
          <p><strong>Été (Juin-Août):</strong> Saison haute, plages animées, festivals</p>
          <p><strong>Automne (Septembre-Novembre):</strong> Mer encore chaude, météo clémente</p>
          <p><strong>Hiver (Décembre-Février):</strong> Calme, idéal pour découvrir la ville</p>
        </div>
      ),
      contentEn: (
        <div className="space-y-3">
          <p><strong>Spring (March-May):</strong> Pleasant temperatures, fewer tourists</p>
          <p><strong>Summer (June-August):</strong> High season, lively beaches, festivals</p>
          <p><strong>Fall (September-November):</strong> Still warm sea, mild weather</p>
          <p><strong>Winter (December-February):</strong> Quiet, ideal for city discovery</p>
        </div>
      ),
    },
    {
      value: 'faq',
      icon: HelpCircle,
      titleFr: 'Questions Fréquentes',
      titleEn: 'Frequently Asked Questions',
      contentFr: (
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Où se garer?</h4>
            <p className="text-muted-foreground">Parkings gratuits près du port et du centre-ville</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Y a-t-il des plages accessibles?</h4>
            <p className="text-muted-foreground">Oui, la Plage de la Lèque est accessible aux personnes à mobilité réduite</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Peut-on louer des vélos?</h4>
            <p className="text-muted-foreground">Plusieurs points de location disponibles près du port</p>
          </div>
        </div>
      ),
      contentEn: (
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Where to park?</h4>
            <p className="text-muted-foreground">Free parking near the port and city center</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Are there accessible beaches?</h4>
            <p className="text-muted-foreground">Yes, La Lèque Beach is accessible to people with reduced mobility</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Can we rent bikes?</h4>
            <p className="text-muted-foreground">Several rental points available near the port</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="infos-pratiques" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-practical-title">
            {t('Informations Pratiques', 'Practical Information')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('Tout ce que vous devez savoir', 'Everything you need to know')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {sections.map((section, index) => (
              <AccordionItem
                key={section.value}
                value={section.value}
                className="bg-card border border-card-border rounded-lg px-6"
                data-testid={`accordion-${section.value}`}
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <section.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {t(section.titleFr, section.titleEn)}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div>{section.contentFr}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
