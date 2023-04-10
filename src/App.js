import "./App.css";
import Features from "./sections/features";
import Footer from "./sections/footer";
import Gallery from "./sections/gallery";
import Header from "./sections/header";
import Homes from "./sections/homes";
import SideBar from "./sections/navBar";
import Realtors from "./sections/realtors";
import Story from "./sections/story";

import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <SideBar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
