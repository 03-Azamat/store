import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import SvgLogo from "../../assets/svg/SvgLogo";
import SvgSearch from "../../assets/svg/SvgSearch";

export default function Header() {
  let listNav = [
    {
      page: "Главный",
      link: "/",
    },
    {
      page: "Все товары",
      link: "/products",
    },
  ];

  return (
    <header>
      <Container maxW='1440px'>
        <Box
          height='60px'
          display='flex'
          justifyContent='space-between'
          alignItems='center'>
          <SvgLogo />

          <nav
            style={{
              display: "flex",
              gap: "30px",
            }}>
            {listNav.map((item) => (
              <NavLink to={`${item.link}`}>{item.page}</NavLink>
            ))}
          </nav>
          <Box>
            <InputGroup size='md'>
              <Input
                type='text'
                placeholder='Enter password'
                borderRadius='50px'
              />
              <InputLeftElement w='45px'>
                <Button
                  bg='transparent'
                  width='4.5rem'
                  p='0'
                  borderRadius='50px'>
                  <SvgSearch />
                </Button>
              </InputLeftElement>
            </InputGroup>
          </Box>
        </Box>
      </Container>
    </header>
  );
}
