
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Portifolio from "./Components/Portifolio";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Brands from "./Components/Brands";
import Consutation from "./Components/Consutation";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <About />
       <Portifolio/>
      <Services/>
      <Testimonials/>
      <Brands/>
      <Consutation/>
      <Footer/>
     
    </div>
  );
};

export default App;
