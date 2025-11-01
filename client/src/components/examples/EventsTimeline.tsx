import EventsTimeline from '../EventsTimeline';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function EventsTimelineExample() {
  return (
    <LanguageProvider>
      <EventsTimeline />
    </LanguageProvider>
  );
}
