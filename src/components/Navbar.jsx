import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  background-color: pink;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ FontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language> EN</Language>
            <SearchContainer>
              {" "}
              <Input placeholder="Search" />
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo> SUBHIDA </Logo>
          </Center>
          <Right>
            <MenuItem> REGISTER </MenuItem>
            <MenuItem>SIGN IN </MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary"></Badge>{" "}
              <ShoppingCartOutlinedIcon />
            </MenuItem>
          </Right>

          {/* <h1>NAVBAR </h1> */}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
