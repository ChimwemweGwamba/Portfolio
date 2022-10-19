import "./App.css";
import NavBar from "./components/navBar/navBar";
import Banner from "./components/banner/banner";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import ProjectSection from "./components/projectSection/projectSection";
import Footer from "./components/footer/footer";



function App() {
  return (
    <div>
      <div className="Container">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <ProjectSection></ProjectSection>
        <Contact></Contact>
        <Footer></Footer>
      </div>
  </div>
  );
}

export default App;
