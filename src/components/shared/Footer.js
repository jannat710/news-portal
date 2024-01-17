import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";


const Footer = () => {
    const navItems = [
        {
          route: "Home",
          pathname: "/",
        },
        {
          route: "Pages",
          pathname: "/pages",
        },
        {
          route: "Category",
          pathname: "/category",
        },
        {
          route: "News",
          pathname: "/news",
        },
        {
          route: "About",
          pathname: "/about",
        },
        {
          route: "Contact",
          pathname: "/contact",
        },
      ];
    return (
        <Box className="bg-black px-2 py-10">
          <Container>
          <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>

        <Typography variant="body2" color="gray" textAlign="center">
          @2023 The Dragon News. Design by Programming Hero.
        </Typography>
            </Container>  
        </Box>
    );
};

export default Footer;