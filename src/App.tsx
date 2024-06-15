import { ArchitectureDescription } from "./components/architectureDescriptions";
import { ArchitectureSection } from "./components/architectureSection";
import { Header } from "./components/header";
import { HeaderScrolled } from "./components/headerScrolled";
import { Home } from "./components/home";

export function App() {
  return (
    <div>
      <Header />
      <Home />
      <HeaderScrolled />
      <ArchitectureSection />
    </div>
  );
}
