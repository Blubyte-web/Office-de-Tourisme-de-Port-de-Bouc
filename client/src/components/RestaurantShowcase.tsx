import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import seafoodImage from '@assets/generated_images/Mediterranean_seafood_platter_994460a7.png';
import fishImage from '@assets/generated_images/Mediterranean_fish_dish_8ad562bc.png';

export default function RestaurantShowcase() {
  const { t } = useLanguage();
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cuisines = [
    { id: 'all', labelFr: 'Tout', labelEn: 'All' },
    { id: 'seafood', labelFr: 'Fruits de Mer', labelEn: 'Seafood' },
    { id: 'french', labelFr: 'Français', labelEn: 'French' },
    { id: 'mediterranean', labelFr: 'Méditerranéen', labelEn: 'Mediterranean' },
    { id: 'casual', labelFr: 'Décontracté', labelEn: 'Casual' },
  ];

  const restaurants = [
    {
      id: 1,
      nameFr: 'La Voile Bleue',
      nameEn: 'The Blue Sail',
      cuisine: 'seafood',
      image: seafoodImage,
      priceRange: 3,
      descFr: 'Restaurant de fruits de mer avec vue sur le port',
      descEn: 'Seafood restaurant with port view',
      location: '43.4089, 4.9891',
    },
    {
      id: 2,
      nameFr: 'Le Poisson d\'Or',
      nameEn: 'The Golden Fish',
      cuisine: 'mediterranean',
      image: fishImage,
      priceRange: 2,
      descFr: 'Cuisine méditerranéenne authentique et poissons frais',
      descEn: 'Authentic Mediterranean cuisine and fresh fish',
      location: '43.4067, 4.9823',
    },
    {
      id: 3,
      nameFr: 'Brasserie du Port',
      nameEn: 'Port Brasserie',
      cuisine: 'french',
      image: seafoodImage,
      priceRange: 2,
      descFr: 'Brasserie traditionnelle française',
      descEn: 'Traditional French brasserie',
      location: '43.4054, 4.9853',
    },
    {
      id: 4,
      nameFr: 'Le Bistrot Marin',
      nameEn: 'The Marine Bistro',
      cuisine: 'casual',
      image: fishImage,
      priceRange: 1,
      descFr: 'Cuisine décontractée avec terrasse',
      descEn: 'Casual dining with terrace',
      location: '43.4012, 4.9765',
    },
  ];

  const filteredRestaurants = selectedCuisine === 'all'
    ? restaurants
    : restaurants.filter(r => r.cuisine === selectedCuisine);

  const getPriceSymbol = (range: number) => '€'.repeat(range);

  return (
    <section id="restaurants" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-restaurants-title">
            {t('Où Manger', 'Where to Eat')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('Savourez la cuisine méditerranéenne', 'Savor Mediterranean cuisine')}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={cuisine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Button
                variant={selectedCuisine === cuisine.id ? 'default' : 'outline'}
                onClick={() => setSelectedCuisine(cuisine.id)}
                className="rounded-full"
                data-testid={`button-cuisine-${cuisine.id}`}
              >
                {t(cuisine.labelFr, cuisine.labelEn)}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`card-restaurant-${restaurant.id}`}
            >
              <div className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={t(restaurant.nameFr, restaurant.nameEn)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {getPriceSymbol(restaurant.priceRange)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {t(restaurant.nameFr, restaurant.nameEn)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(restaurant.descFr, restaurant.descEn)}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" data-testid={`button-map-${restaurant.id}`}>
                      <MapPin className="w-4 h-4 mr-2" />
                      {t('Voir sur la carte', 'View on map')}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
