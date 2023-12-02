import Catogery from "../catogery/Catogery";
import Hero from "../hero/Hero";
import Mission from "../mission/Mission";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Mission />
      <Catogery />
    </div>
  );
};

export default Home;
