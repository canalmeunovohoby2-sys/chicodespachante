import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { useParallax } from "./hooks/useParallax";
import { Hero } from "./sections/Hero";
import { Experience45 } from "./sections/Experience45";
import { Services } from "./sections/Services";
import { Emplacamento0km } from "./sections/Emplacamento0km";
import { Transferencia } from "./sections/Transferencia";
import { Team } from "./sections/Team";
import { HowItWorks } from "./sections/HowItWorks";
import { ClassicPlate } from "./sections/ClassicPlate";
import { Community } from "./sections/Community";
import { ContactForm } from "./sections/ContactForm";
import { Location } from "./sections/Location";
import { FinalCTA } from "./sections/FinalCTA";

export function App() {
  useParallax();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Experience45 />
        <Services />
        <Emplacamento0km />
        <Transferencia />
        <Team />
        <HowItWorks />
        <ClassicPlate />
        <Community />
        <ContactForm />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
