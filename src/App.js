import "./App.css"
import Banner from "./components/banner"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import ProjectSection from "./components/projectSection/projectSection"
import Footer from "./components/footer/footer"
import NavBar from "./components/navBar/navBar"



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
