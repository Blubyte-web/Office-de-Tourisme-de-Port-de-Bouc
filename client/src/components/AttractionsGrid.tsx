import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import fortImage from '@assets/generated_images/Fort_de_Bouc_fortress_7ebf94e4.png';
import beachImage from '@assets/generated_images/Mediterranean_beach_paradise_def967b1.png';
import marinaImage from '@assets/generated_images/Port_de_Plaisance_marina_8c35e324.png';
import waterfrontImage from '@assets/generated_images/Waterfront_promenade_scene_a0e87ed5.png';
import natureImage from '@assets/generated_images/Coastal_nature_park_10cdd149.png';

export default function AttractionsGrid() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAttraction, setSelectedAttraction] = useState<any>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    { id: 'all', labelFr: 'Tout', labelEn: 'All' },
    { id: 'historical', labelFr: 'Sites Historiques', labelEn: 'Historical Sites' },
    { id: 'beaches', labelFr: 'Plages & Sports Nautiques', labelEn: 'Beaches & Water Sports' },
    { id: 'nature', labelFr: 'Nature & Parcs', labelEn: 'Nature & Parks' },
    { id: 'culture', labelFr: 'Culture', labelEn: 'Culture' },
  ];

  const attractions = [
    {
      id: 1,
      titleFr: 'Fort de Bouc',
      titleEn: 'Fort de Bouc',
      category: 'historical',
      image: fortImage,
      shortDescFr: 'Forteresse historique surplombant la mer',
      shortDescEn: 'Historic fortress overlooking the sea',
      fullDescFr: 'Le Fort de Bouc est une forteresse historique du XVIIe siècle qui veille majestueusement sur le port. Découvrez son architecture remarquable et profitez de vues panoramiques sur la Méditerranée.',
      fullDescEn: 'Fort de Bouc is a 17th-century historic fortress that majestically watches over the port. Discover its remarkable architecture and enjoy panoramic views of the Mediterranean.',
      location: '43.4054, 4.9853',
    },
    {
      id: 2,
      titleFr: 'Plage de la Lèque',
      titleEn: 'La Lèque Beach',
      category: 'beaches',
      image: beachImage,
      shortDescFr: 'Plage de sable fin aux eaux turquoise',
      shortDescEn: 'Sandy beach with turquoise waters',
      fullDescFr: 'Une magnifique plage de sable fin bordée d\'eaux cristallines. Idéale pour la baignade, les sports nautiques et les moments de détente en famille.',
      fullDescEn: 'A beautiful sandy beach bordered by crystal-clear waters. Perfect for swimming, water sports, and family relaxation.',
      location: '43.4012, 4.9765',
    },
    {
      id: 3,
      titleFr: 'Port de Plaisance',
      titleEn: 'Marina',
      category: 'culture',
      image: marinaImage,
      shortDescFr: 'Marina moderne avec restaurants et cafés',
      shortDescEn: 'Modern marina with restaurants and cafes',
      fullDescFr: 'Le Port de Plaisance offre une ambiance méditerranéenne authentique avec ses yachts, restaurants en bord de mer et terrasses ensoleillées.',
      fullDescEn: 'The Marina offers an authentic Mediterranean atmosphere with its yachts, waterfront restaurants, and sunny terraces.',
      location: '43.4089, 4.9891',
    },
    {
      id: 4,
      titleFr: 'Promenade du Front de Mer',
      titleEn: 'Waterfront Promenade',
      category: 'nature',
      image: waterfrontImage,
      shortDescFr: 'Promenade pittoresque le long de la côte',
      shortDescEn: 'Picturesque walk along the coast',
      fullDescFr: 'Une promenade relaxante offrant des vues magnifiques sur la mer Méditerranée, ponctuée de palmiers et de bancs pour profiter du coucher de soleil.',
      fullDescEn: 'A relaxing promenade offering magnificent views of the Mediterranean Sea, dotted with palm trees and benches to enjoy the sunset.',
      location: '43.4067, 4.9823',
    },
    {
      id: 5,
      titleFr: 'Parc Naturel Côtier',
      titleEn: 'Coastal Nature Park',
      category: 'nature',
      image: natureImage,
      shortDescFr: 'Espace naturel préservé avec sentiers',
      shortDescEn: 'Preserved natural space with trails',
      fullDescFr: 'Découvrez la flore méditerranéenne dans ce parc naturel préservé. Sentiers de randonnée et points de vue panoramiques sur la mer.',
      fullDescEn: 'Discover Mediterranean flora in this preserved natural park. Hiking trails and panoramic sea viewpoints.',
      location: '43.3978, 4.9745',
    },
  ];

  const filteredAttractions = selectedCategory === 'all'
    ? attractions
    : attractions.filter(a => a.category === selectedCategory);

  return (
    <section id="attractions" className="py-20 md:py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-attractions-title">
            {t('Que Faire', 'Things to Do')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('Explorez les merveilles de Port-de-Bouc', 'Explore the wonders of Port-de-Bouc')}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Button
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="rounded-full"
                data-testid={`button-filter-${cat.id}`}
              >
                {t(cat.labelFr, cat.labelEn)}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((attraction, index) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedAttraction(attraction)}
              data-testid={`card-attraction-${attraction.id}`}
            >
              <div className="bg-background border border-border rounded-lg overflow-hidden hover-elevate transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={t(attraction.titleFr, attraction.titleEn)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-serif font-bold text-white">
                    {t(attraction.titleFr, attraction.titleEn)}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {t(attraction.shortDescFr, attraction.shortDescEn)}
                  </p>
                  <button className="text-primary font-medium hover:underline">
                    {t('En savoir plus', 'Learn more')} →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedAttraction} onOpenChange={() => setSelectedAttraction(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif">
              {selectedAttraction && t(selectedAttraction.titleFr, selectedAttraction.titleEn)}
            </DialogTitle>
          </DialogHeader>
          {selectedAttraction && (
            <div className="space-y-4">
              <img
                src={selectedAttraction.image}
                alt={t(selectedAttraction.titleFr, selectedAttraction.titleEn)}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-foreground leading-relaxed">
                {t(selectedAttraction.fullDescFr, selectedAttraction.fullDescEn)}
              </p>
              <div className="flex gap-3">
                <Button className="flex items-center gap-2" data-testid="button-get-directions">
                  <MapPin className="w-4 h-4" />
                  {t('Obtenir des directions', 'Get directions')}
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  {t('Plus d\'infos', 'More info')}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
