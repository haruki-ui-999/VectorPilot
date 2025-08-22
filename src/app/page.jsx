import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import VideoTour from "../components/VideoTour";
import ComparisonTable from "../components/ComparisonTable";
import LeadForm from "../components/LeadForm";
import SocialProof from "../components/SocialProof";
import HowItWorks from "../components/HowItWorks";
import SecurityNotes from "../components/SecurityNotes";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      <Hero />
      <Benefits />
      <VideoTour />
      <ComparisonTable />
      <LeadForm />
      <SocialProof />
      <HowItWorks />
      <SecurityNotes />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}