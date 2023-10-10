import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import "./sidenav.css";
import { Stack } from "@mui/material";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const pages = [
  "Dashboard",
  "Monthly Process",
  "Super Configuration",
  "Master Reports",
  "More",
];

const subpages: { [key: string]: string[] } = {
  Dashboard: ["Subpage 1", "Subpage 2"],
  "Monthly Process": ["Subpage A", "Subpage B"],
  "Super Configuration": ["Services Offered", "Org Setup"],
  "Master Reports": ["Subpage I", "Subpage II"],
  More: ["Subpage Alpha", "Subpage Beta"],
};
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default function Sidenav(props: Props) {
  const { window } = props;
  const [currentPage, setCurrentPage] = useState("Super Configuration");
  const [currentSubPage, setCurrentSubPage] = useState("Org Setup");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOnClick = (page: string) => {
    setCurrentPage(page);
    const first = subpages[page][0];
    setCurrentSubPage(first);
  };
  const handleSubPageClick = (subpage: string) => {
    setCurrentSubPage(subpage);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <List
          sx={{
            width: `calc( ${drawerWidth / 3}px)`,
            backgroundColor: "#F7F7F7     ",
          }}
        >
          {pages.map((text, index) => (
            <ListItem
              key={text}
              className={currentPage === text ? "activeSideNav" : ""}
              onClick={() => handleOnClick(text)}
              disablePadding
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: ".5rem",
                  margin: ".5rem 0rem",
                  cursor: "pointer",
                }}
              >
                <div style={{ width: "24px" }}>
                  {text === "Dashboard" && (
                    <img
                      src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910171/FlipkartAdmin/dashboard_black_24dp_o3qbb4.svg"
                      alt="dash"
                    />
                  )}
                  {text === "Monthly Process" && (
                    <img
                      src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910178/FlipkartAdmin/work_history_black_24dp_puvvoz.svg"
                      alt="monthly"
                    />
                  )}
                  {text === "Super Configuration" && (
                    <img
                      src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910182/FlipkartAdmin/tune_black_24dp_yoon12.svg"
                      alt="monthly"
                    />
                  )}
                  {text === "Master Reports" && (
                    <img
                      src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910186/FlipkartAdmin/auto_graph_black_24dp_kisuqv.svg"
                      alt="masterrports"
                    />
                  )}
                  {text === "More" && (
                    <img
                      src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910189/FlipkartAdmin/read_more_black_24dp_fupuhs.svg"
                      alt="moreLgo"
                    />
                  )}
                </div>

                <div className="navBarTitle">{text}</div>
              </div>
            </ListItem>
          ))}
        </List>

        <List sx={{ width: "100%" }}>
          {subpages[currentPage] &&
            subpages[currentPage].map((subpage, index) => (
              <ListItem
                key={subpage}
                className={
                  currentSubPage === subpage
                    ? "activeSideNavSub"
                    : "inActiveSideNavSub"
                }
                onClick={() => handleSubPageClick(subpage)}
                disablePadding
              >
                <ListItemButton>
                  <div>{subpage}</div>
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  console.log(anchorElNav);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  console.log(handleCloseNavMenu);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: "1300",
          backgroundColor: "#FFF",
          borderBottom: "1px solid #DADCE0",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ mr: 2, display: { sm: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />x
          </IconButton>
        </Toolbar>
        <div className="sidenavData">
          <img
            src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696874489/FlipkartAdmin/Flipkart_logo-700x185_hogggx.jpg"
            alt="flipkartLogo"
            height={"50px"}
          />
          <div>1</div>

          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <Stack direction={"column"} sx={{ color: "red" }}>
                  <div className="cycleDate">
                    Pay Cycle: 31-May-2021 to 31-June-2021{" "}
                  </div>
                  <div className="companyName">Amazon India Pvt Ltd</div>
                </Stack>
                <Stack mr={2} direction={"row"} spacing={1}>
                  <Stack spacing={1} alignItems={"center"}>
                    <img
                      src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696931978/FlipkartAdmin/help_outline-24px_3_xzodzs.svg"
                      width={"24px"}
                      alt="help"
                    />
                    <div className="appBarLogoDetails">Support</div>
                  </Stack>
                  <Stack spacing={1} alignItems={"center"}>
                    <img
                      src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696932014/FlipkartAdmin/Group_8570_s8ewit.svg"
                      width={"24px"}
                      alt="Noti"
                    />
                    <div className="appBarLogoDetails">Notifications</div>
                  </Stack>
                </Stack>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          padding: "0px",
          paddingTop: "64px",
        }}
      >
        {currentSubPage === "Org Setup" && <Home />}
        {currentPage === "About" && <About />}
      </Box>
    </Box>
  );
}
