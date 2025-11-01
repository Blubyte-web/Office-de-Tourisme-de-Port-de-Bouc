import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Waves, Clock, UtensilsCrossed } from 'lucide-react';
import CountUp from 'react-countup';
import { useLanguage } from '@/contexts/LanguageContext';
import fortImage from '@assets/generated_images/Fort_de_Bouc_fortress_7ebf94e4.png';
import beachImage from '@assets/generated_images/Mediterranean_beach_paradise_def967b1.png';
import marinaImage from '@assets/generated_images/Port_de_Plaisance_marina_8c35e324.png';
import waterfrontImage from '@assets/generated_images/Waterfront_promenade_scene_a0e87ed5.png';

export default function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Users,
      value: 150000,
      suffix: '+',
      labelFr: 'visiteurs par an',
      labelEn: 'visitors per year',
    },
    {
      icon: Waves,
      value: 5,
      suffix: '',
      labelFr: 'plages magnifiques',
      labelEn: 'beautiful beaches',
    },
    {
      icon: Clock,
      value: 600,
      suffix: '',
      labelFr: "ans d'histoire",
      labelEn: 'years of history',
    },
    {
      icon: UtensilsCrossed,
      value: 12,
      suffix: '+',
      labelFr: 'restaurants locaux',
      labelEn: 'local restaurants',
    },
  ];

  const images = [fortImage, beachImage, marinaImage, waterfrontImage];

  return (
    <section id="a-propos" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-about-title">
            {t('À Propos de Port-de-Bouc', 'About Port-de-Bouc')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
            {t(
              "Une presqu'île s'avance vers la mer Méditerranée, face à l'imposante stature du Fort de Bouc, qui veille majestueusement au ballet incessant des bateaux de pêche et de plaisance.",
              "A peninsula advancing towards the Mediterranean sea, facing the imposing stature of the Fort de Bouc, which majestically ensures the incessant comings and goings of boats."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="hover-elevate"
            >
              <div className="bg-card border border-card-border rounded-lg p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid={`text-stat-${index}`}>
                  {isInView && <CountUp end={stat.value} duration={2.5} />}
                  {stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t(stat.labelFr, stat.labelEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group"
            >
              <img
                src={img}
                alt={`Port-de-Bouc ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid={`img-about-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
