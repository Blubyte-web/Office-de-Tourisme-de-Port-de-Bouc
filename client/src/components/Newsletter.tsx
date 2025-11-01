import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    toast({
      title: t('Inscription réussie!', 'Successfully subscribed!'),
      description: t('Merci de vous être inscrit à notre newsletter.', 'Thank you for subscribing to our newsletter.'),
    });
    setEmail('');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-chart-2" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" data-testid="text-newsletter-title">
            {t('Restez Informé', 'Stay Informed')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t(
              'Recevez nos actualités, événements et offres spéciales',
              'Receive our news, events and special offers'
            )}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('Votre email', 'Your email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              className="bg-mediterranean-orange hover:bg-mediterranean-orange/90 text-white"
              data-testid="button-subscribe"
            >
              {t('S\'abonner', 'Subscribe')}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
