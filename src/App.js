import "./App.css";
import NavBar from "./components/NavBar/navBar";
import BannerLeft from "./components/Banner/bannerLeft/bannerLeft";
import BannerImg from "./components/Banner/bannerImg/bannerImg";
import AboutHeading from "./components/About/heading/aboutHeading";
import AboutLeft from "./components/About/aboutLeft/aboutLeft";
import AboutRight from "./components/About/aboutRight/aboutRight";




function App() {
  return (
    <div>
      <div className="AppContainer">

        {/* ------- NAV BAR --------- */}
        <div className="navBarContainer">
          <NavBar></NavBar>
        </div>


        {/* ----- BANNER SECTION ------ */}
        <div className="bannerContainer">
            <div className="bannerLeft">
              <BannerLeft></BannerLeft>
            </div>

            <div className="bannerRight">
              <BannerImg></BannerImg>
            </div>
        </div>


        {/* ----- ABOUT SECTION ------ */}
        <div className="aboutContainer">
          <AboutHeading></AboutHeading>

          <div className="aboutSectionsContainer">
            <div className="aboutLeft">
              <AboutLeft></AboutLeft>
            </div>

            <div className="aboutRight">
              <AboutRight></AboutRight>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
