import NavigationBar from '@/components/sections/NavigationBar';
import HeroSection from '@/components/sections/HeroSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import HalaqohSection from '@/components/sections/HalaqohSection';
import ExtracurricularSection from '@/components/sections/ExtracurricularSection';
import GallerySection from '@/components/sections/GallerySection';
import TimelineSection from '@/components/sections/TimelineSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import RequirementsSection from '@/components/sections/RequirementsSection';

export default function HomePage() {
  return (
    <main className='bg-white'>
      <NavigationBar />
      <HeroSection />
      <VisionMissionSection />
      <ProgramsSection />
      <HalaqohSection />
      <ExtracurricularSection />
      <GallerySection />
      <TimelineSection />
      <RequirementsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
