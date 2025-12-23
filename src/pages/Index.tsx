import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Commands from "@/components/Commands";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      <Hero />
      <Features />
      <HowItWorks />
      <Commands />
      <Footer />
    </main>
  );
};

export default Index;
