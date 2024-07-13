import About from "../components/About";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Location from "../components/Location";
import PageHoc from "../components/PageHoc";
import WhyUs from "../components/WhyUs";
function App() {
  return (
    <div className="">
      <Hero />
      <About />
      <WhyUs />
      <HowItWorks />
      <FAQ />
      <Location />
      <Footer />
    </div>
  );
}

export default PageHoc(App);
