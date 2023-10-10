import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "./sidenav.css";

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const pages = ['Dashboard', 'Monthly Process', 'Super Configuration', 'Master Reports', 'More'];

const subpages: { [key: string]: string[] } = {
    "Dashboard": ["Subpage 1", "Subpage 2"],
    "Monthly Process": ["Subpage A", "Subpage B"],
    "Super Configuration": ["Services Offered", "Org Setup"],
    "Master Reports": ["Subpage I", "Subpage II"],
    "More": ["Subpage Alpha", "Subpage Beta"],
};
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Sidenav(props: Props) {
    const { window } = props;
    const [currentPage, setCurrentPage] = useState("Super Configuration");
    const [currentSubPage, setCurrentSubPage] = useState("Supage 1");
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleOnClick = (page: string) => {
        setCurrentPage(page);
        const first = subpages[page][0]
        setCurrentSubPage(first);
    }
    const handleSubPageClick = (subpage: string) => {
        setCurrentSubPage(subpage);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <List sx={{ width: `calc( ${drawerWidth / 3}px)`, backgroundColor: "#F7F7F7     " }}>
                    {pages.map((text, index) => (
                        <ListItem key={text} className={currentPage === text ? 'activeSideNav' : ''} onClick={() => handleOnClick(text)} disablePadding>
                            <div style={{ display: "flex", flexDirection: "column", paddingLeft: ".5rem", margin: ".5rem 0rem", cursor: "pointer" }}>
                                {/* <ListItemIcon> */}
                                <div style={{ width: "24px" }}>
                                    {text === "Dashboard" &&
                                        <img src='https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910171/FlipkartAdmin/dashboard_black_24dp_o3qbb4.svg' />
                                    }
                                    {text === "Monthly Process" &&
                                        <img src='https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910178/FlipkartAdmin/work_history_black_24dp_puvvoz.svg' />
                                    }
                                    {text === "Super Configuration" &&
                                        <img src='https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910182/FlipkartAdmin/tune_black_24dp_yoon12.svg' />
                                    }
                                    {text === "Master Reports" &&
                                        <img src='https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910186/FlipkartAdmin/auto_graph_black_24dp_kisuqv.svg' />
                                    }
                                    {text === "More" &&
                                        <img src='https://res.cloudinary.com/dyaaypoqk/image/upload/v1696910189/FlipkartAdmin/read_more_black_24dp_fupuhs.svg' />
                                    }
                                </div>
                                {/* </ListItemIcon> */}
                                <div className='navBarTitle'  >{text}</div>
                            </div>
                        </ListItem>
                    ))}
                </List>
                {/* <Divider /> */}
                <List sx={{ width: "100%" }}>
                    {subpages[currentPage] && subpages[currentPage].map((subpage, index) => (
                        <ListItem key={subpage} className={currentSubPage === subpage ? 'activeSideNavSub' : 'inActiveSideNavSub'} onClick={() => handleSubPageClick(subpage)} disablePadding>
                            <ListItemButton>
                                {/* Your code for rendering subpage icons or text */}
                                <div>{subpage}</div>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    //appbar
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    // width: { sm: `calc(100% - ${drawerWidth}px)` },
                    // ml: { sm: `${drawerWidth}px` },
                    zIndex: "1300",
                    backgroundColor: "#FFF",
                    borderBottom: "1px solid #DADCE0",
                    boxShadow: "none"
                }}
            >
                <Toolbar sx={{ mr: 2, display: { sm: 'none' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}

                    >
                        <MenuIcon />x
                    </IconButton>

                </Toolbar>
                <div className='sidenavData'>
                    <img src='https://res.cloudinary.com/dyaaypoqk/image/upload/v1696874489/FlipkartAdmin/Flipkart_logo-700x185_hogggx.jpg' alt='flipkartLogo' />
                    {/* <ResponsiveAppBar /> */}
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="#app-bar-with-responsive-menu"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    LOGO
                                </Typography> */}

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
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
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                    padding: "0px",
                    paddingTop: '64px'

                }}
            >
                {/* <Toolbar /> */}
                {currentSubPage === "Org Setup" && <Home />}
                {currentPage === "About" && <About />}
            </Box>
        </Box>
    );
}
