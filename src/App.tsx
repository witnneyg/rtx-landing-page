import { ArchitectureSection } from "./components/architectureSection";
import { CreationCharacteristics } from "./components/creationCharacteristics";
import { CreationSection } from "./components/creationSection";
import { Dlss3Section } from "./components/dlss3Section";
import { Header } from "./components/header";
import { HeaderScrolled } from "./components/headerScrolled";
import { Home } from "./components/home";
import { PerformanceEnergy } from "./components/performanceEnergy";
import { PerformanceSection } from "./components/performanceSection";
import { RayTracingAction } from "./components/rayTracingAction";
import { RayTracingSection } from "./components/rayTracingSection";
import { ReflexSection } from "./components/reflexSection";
import { SpecficationGallery } from "./components/specificationsGallery";
import { SpecificationsSection } from "./components/specificationsSection";

import "@radix-ui/themes/styles.css";

// https://clips.twitch.tv/SlickShakingAniseOSfrog-oYLKiwWPXGzY1WU9

export function App() {
  return (
    <div className="text-white">
      <Header />
      <Home />
      <HeaderScrolled />
      <ArchitectureSection />
      <PerformanceSection />
      <PerformanceEnergy />
      <RayTracingSection />
      <RayTracingAction />
      <Dlss3Section />
      <ReflexSection />
      <CreationSection />
      <CreationCharacteristics />
      <SpecificationsSection />
      <SpecficationGallery />
    </div>
  );
}
