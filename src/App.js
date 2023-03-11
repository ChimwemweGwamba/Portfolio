import Banner from "./components/banner"
import About from "./components/about"
import Contact from "./components/contact"
import Projects from "./components/projects"
import Footer from "./components/footer"
import NavBar from "./components/navBar/navBar"
import styled from "styled-components";



const Container = styled.div`
  height: 100vh; 
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;


function App() {
  return (

      <Container>
        {/* <NavBar></NavBar> */}
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        {/* <Footer></Footer> */}
      </Container>

  );
}

export default App;
