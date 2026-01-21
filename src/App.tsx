import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        {/* <Calendar /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
