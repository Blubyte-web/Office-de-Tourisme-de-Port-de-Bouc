import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@assets/generated_images/Hero_Mediterranean_coastal_panorama_4160bedb.png';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(10, 77, 140, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 md:p-12 shadow-2xl">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-hero-title"
            >
              {t('Port-de-Bouc: Votre Joyau Méditerranéen', 'Port-de-Bouc: Your Mediterranean Gem')}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              data-testid="text-hero-subtitle"
            >
              {t('Découvrez la beauté de la côte provençale', 'Discover the beauty of the Provençal coast')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-mediterranean-orange hover:bg-mediterranean-orange/90 text-white text-lg px-8"
                data-testid="button-explore"
              >
                {t('Explorer', 'Explore')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8"
                data-testid="button-discover"
              >
                {t('Découvrir Plus', 'Discover More')}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white" data-testid="icon-scroll-indicator" />
      </motion.div>
    </section>
  );
}
