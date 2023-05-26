import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "create-player",
      path: "/create-player",
    },
    {
      name: "create-team",
      path: "/create-team",
    },
    {
      name: "create-match",
      path: "/create-match",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Cricket
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <Button key={i} sx={{ color: "#fff" }}>
                <Link
                  to={item.path}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
