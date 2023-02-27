import "./App.css"
import Banner from "./components/banner"
import About from "./components/about"
import Contact from "./components/contact"
import Projects from "./components/projects"
import Footer from "./components/footer/footer"
import NavBar from "./components/navBar/navBar"



function App() {
  return (
    <div>
      <div className="Container">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
  </div>
  );
}

export default App;
