import ".//FeaturedHome.scss";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const FeaturedHome = () => {
  return (
    <div className="customContainer">
      <div className="FeaturedHome">
        <Box sx={{ width: "100%" }}>
          <Stack
            justifyContent="space-between"
            spacing={3}
            direction="row"
            flexWrap="wrap"
          >
            <div className="featurePost">
              <div className="FeatureText">Featured Post</div>
              <img src=".\images\feature.jpg" alt="" />
              <div className="firstText">By John Doe l May 23, 2022</div>
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
            <div className="secondFeature">ddfdsf</div>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default FeaturedHome;
