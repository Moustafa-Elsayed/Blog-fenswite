import "./header.scss";
// import { useState } from "react";
import { Fragment } from "react";
import {
  Box,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  //   const [open, setOpen] = useState("none");
  //   const [ope, setOpe] = useState(false);
  //   const [close, setClose] = useState("permanent");

  return (
    <>
      <Fragment>
        <div className="appbar">
          <AppBar
            className="nav-bar"
            position="fixed"
            sx={{ backgroundColor: "black" }}
            elevation={2}
          >
            <div className="customContainer">
              <Toolbar
              className="nav-bar"
                sx={{ justifyContent: "space-between" }}
              >
                <img src="./images/Logo.png" alt="" className="headerlogo" />
                <Box
                  sx={{
                    paddingLeft: "80px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <ListItemButton>
                      <ListItemText
                        variant="p"
                        primary="Home"
                        className="appbar-links"
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText
                        variant="p"
                        primary="Blog"
                        className="appbar-links"
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText
                        variant="p"
                        primary="About Us"
                        className="appbar-links"
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText
                        variant="p"
                        primary="Contact us"
                        className="appbar-links"
                      />
                    </ListItemButton>
                    <button className="btn">Subscribe</button>
                  </Box>
                </Box>

                <MenuIcon
                  onClick={() => {
                    //   setClose("temporary");
                    //   setOpen("block");
                  }}
                  sx={{
                    display: { xs: "block", md: "none" },
                    color: "#343a40",
                  }}
                />
              </Toolbar>
            </div>
          </AppBar>

          <div className="overlay"></div>
        </div>
        {/* <Sidebar
          open={open}
          setOpen={setOpen}
          ope={ope}
          setOpe={setOpe}
          close={close}
          setClose={setClose}
        /> */}
      </Fragment>
    </>
  );
};

export default Header;
