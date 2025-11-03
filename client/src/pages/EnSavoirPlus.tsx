import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function EnSavoirPlus() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <main className="px-4 md:px-12 lg:px-24 py-12 space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-foreground">
            En savoir plus
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez en détail tout ce que Port-de-Bouc a à offrir : son
            patrimoine, ses plages, ses événements, et la richesse de sa culture
            locale.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Histoire et Patrimoine
            </h2>
            <p className="text-muted-foreground">
              Port-de-Bouc est une ville portuaire à l’histoire fascinante,
              marquée par la pêche, la construction navale et l’identité
              méditerranéenne. Explorez ses musées, ses monuments et ses
              traditions.
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Activités et Loisirs
            </h2>
            <p className="text-muted-foreground">
              Que vous soyez amateur de nature, de gastronomie ou de découvertes
              culturelles, Port-de-Bouc offre des activités pour tous les goûts
              et toutes les saisons.
            </p>
          </div>
        </section>

        <section className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pour plus d’informations, contactez l’Office de Tourisme ou
            abonnez-vous à notre newsletter.
          </p>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
