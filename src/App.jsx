
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Portifolio from "./Components/Portifolio";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
       <Portifolio/>
      <Services/>
      <Testimonials/> 
    </div>
  );
};

export default App;
