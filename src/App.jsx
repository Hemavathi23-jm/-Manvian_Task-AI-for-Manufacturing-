import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import "@/App.css";
import { initLenis, lenisStore } from "@/lib/scroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhyAIMatters from "@/components/WhyAIMatters";
import Agenda from "@/components/Agenda";
import Speaker from "@/components/Speaker";
import Audience from "@/components/Audience";
import Registration from "@/components/Registration";
import ThankYou from "@/components/ThankYou";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

function App() {
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    initLenis();
    return () => lenisStore.destroy?.();
  }, [registered]);

  useEffect(() => {
    if (!registered) return;
    if (lenisStore.current) lenisStore.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [registered]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-steel text-ivory" data-testid={registered ? "app-thankyou-view" : "app-landing-view"}>
        {registered ? (
          <>
            <ThankYou onGoHome={() => setRegistered(false)} />
            <Footer />
          </>
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <Marquee />
              <WhyAIMatters />
              <Agenda />
              <Speaker />
              <Audience />
              <Registration onRegistered={() => setRegistered(true)} />
              <FAQ />
            </main>
            <Footer />
          </>
        )}
      </div>
    </MotionConfig>
  );
}

export default App;
