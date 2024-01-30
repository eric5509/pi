import Crypto from "@/components/Crypto";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Mining from "@/components/Mining";
import Mobile from "@/components/Mobile";
import Navigation from "@/components/Navigation";
import SectionA from "@/components/SectionA";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <SectionA />
      <Mining />
      <Crypto />
      <Mobile />
      <Download />
      <Footer />

    </main>
  );
}
