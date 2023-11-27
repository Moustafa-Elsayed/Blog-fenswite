import "./hero.scss";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="overlay"></div>
        <div className="customContainer">
          <div className="textContainer">
            <div className="firstText">Posted on startup</div>
            <div className="secondtText">
              Step-by-step guide to choosing great font pairs
            </div>
            <div className="data">
              By <span>James West</span> | May 23, 2022
            </div>
            <div className="thirdText">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
            <button className="btn">
              Read More <span> > </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
