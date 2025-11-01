import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Music, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import festivalImage from '@assets/generated_images/Summer_festival_celebration_d6d3d90a.png';
import musicImage from '@assets/generated_images/Live_music_event_4d4eee22.png';

export default function EventsTimeline() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filters = [
    { id: 'all', labelFr: 'Tous', labelEn: 'All' },
    { id: 'upcoming', labelFr: 'À Venir', labelEn: 'Upcoming' },
    { id: 'this-month', labelFr: 'Ce Mois', labelEn: 'This Month' },
  ];

  const categoryColors: Record<string, string> = {
    festival: 'bg-purple-500',
    music: 'bg-blue-500',
    culture: 'bg-orange-500',
    gastronomy: 'bg-red-500',
  };

  const events = [
    {
      id: 1,
      titleFr: 'Festival d\'Été',
      titleEn: 'Summer Festival',
      date: '15 Juillet 2025',
      dateEn: 'July 15, 2025',
      category: 'festival',
      categoryFr: 'Festival',
      categoryEn: 'Festival',
      image: festivalImage,
      descFr: 'Grand festival d\'été avec musique, danse et gastronomie locale',
      descEn: 'Grand summer festival with music, dance and local gastronomy',
    },
    {
      id: 2,
      titleFr: 'Concert Jazz au Port',
      titleEn: 'Jazz Concert at the Port',
      date: '22 Août 2025',
      dateEn: 'August 22, 2025',
      category: 'music',
      categoryFr: 'Musique',
      categoryEn: 'Music',
      image: musicImage,
      descFr: 'Soirée jazz en plein air sur la promenade du port',
      descEn: 'Outdoor jazz evening on the port promenade',
    },
    {
      id: 3,
      titleFr: 'Fête de la Gastronomie',
      titleEn: 'Gastronomy Festival',
      date: '5 Septembre 2025',
      dateEn: 'September 5, 2025',
      category: 'gastronomy',
      categoryFr: 'Gastronomie',
      categoryEn: 'Gastronomy',
      image: festivalImage,
      descFr: 'Découvrez les saveurs de la cuisine provençale',
      descEn: 'Discover the flavors of Provençal cuisine',
    },
  ];

  return (
    <section id="evenements" className="py-20 md:py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-events-title">
            {t('Événements & Culture', 'Events & Culture')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('Vivez l\'expérience culturelle méditerranéenne', 'Experience Mediterranean culture')}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <motion.div
              key={filter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Button
                variant={selectedFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setSelectedFilter(filter.id)}
                className="rounded-full"
                data-testid={`button-filter-${filter.id}`}
              >
                {t(filter.labelFr, filter.labelEn)}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`card-event-${event.id}`}
            >
              <div className="bg-background border border-border rounded-lg overflow-hidden hover-elevate group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={t(event.titleFr, event.titleEn)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 ${categoryColors[event.category]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {t(event.categoryFr, event.categoryEn)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{t(event.date, event.dateEn)}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {t(event.titleFr, event.titleEn)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(event.descFr, event.descEn)}
                  </p>
                  <Button size="sm" variant="outline" className="w-full" data-testid={`button-participate-${event.id}`}>
                    {t('Participer', 'Participate')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
