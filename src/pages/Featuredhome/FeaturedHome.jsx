import ".//FeaturedHome.scss";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const FeaturedHome = () => {
  return (
    <div className="customContainer">
      <div className="FeaturedHome">
        <div className="featurePost">
          <div className="featureText">Featured Post</div>
          <div className="feautureContainer">
            <img src=".\images\feature.jpg" alt="" />
            <div className="firstText">
              By <span>John Doe</span> l May 23, 2022
            </div>
            <div className="secondText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
            <div className="thirdtext">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
            <button className="btn">Read More ></button>
          </div>
        </div>
        <div className="secondFeature">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{ paddingBottom: "32px" }}
          >
            <div className="fisrtHeader">All Posts</div>
            <div className="secondHeader">View All</div>
          </Stack>
          <div className="featureCard">
            <div className="firstCradTitle">
              By <span>John Doe</span> l Aug 23, 2021
            </div>
            <div className="secondCradTitle">
              8 Figma design systems that you can download for free today.
            </div>
          </div>
          <div className="featureCard custom">
            <div className="firstCradTitle">
              By <span>John Doe</span> l Aug 23, 2021
            </div>
            <div className="secondCradTitle">
              8 Figma design systems that you can download for free today.
            </div>
          </div>
          <div className="featureCard">
            <div className="firstCradTitle">
              By <span>John Doe</span> l Aug 23, 2021
            </div>
            <div className="secondCradTitle">
              8 Figma design systems that you can download for free today.
            </div>
          </div>
          <div className="featureCard">
            <div className="firstCradTitle">
              By <span>John Doe</span> l Aug 23, 2021
            </div>
            <div className="secondCradTitle">
              8 Figma design systems that you can download for free today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHome;
