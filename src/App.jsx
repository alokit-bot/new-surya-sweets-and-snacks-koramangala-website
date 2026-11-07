import "./styles.css";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { SnacksBanner } from "./components/SnacksBanner";
import { Gifting } from "./components/Gifting";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Menu />
        <SnacksBanner />
        <Gifting />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
