import { ArchitectureSection } from "./components/architectureSection";
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
    </div>
  );
}
