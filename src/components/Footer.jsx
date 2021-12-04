import React from "react";
import styled from "styled-components";
// import {
//   FacebookIcon,
//   InstagramIcon,
//   TwitterIcon,
//   PinterestIcon,
// } from "@material-ui/icons";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import RoomIcon from "@material-ui/icons/Room";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-buttom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-buttom: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgray" })}
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%
color:white;
background-color:${(props) => props.color};

display: flex;
align-items: center;
justify-content: center;
margin-right:20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Payment = styled.img`
  width: 50%;
  ${mobile({ justifyContenet: "center" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> HASINA</Logo>
        <Description>
          {" "}
          There are many variatuons of passages of Loremz{" "}
        </Description>
        <SocialContainer>
          <SocialIcon color="#385999">
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color="#E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color="#E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links </Title>
        <List>
          <ListItem> Home</ListItem>
          <ListItem> Cart </ListItem>
          <ListItem> Men Fashion </ListItem>
          <ListItem> Woman Fashion </ListItem>
          <ListItem> Accessories </ListItem>
          <ListItem> My Account </ListItem>
          <ListItem> Order Tracking </ListItem>
          <ListItem> Wishlist </ListItem>
          <ListItem> Terms </ListItem>
        </List>
      </Center>
      <Right>
        <Title> Contact </Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          17 Kaldhara, Kathmandu{" "}
        </ContactItem>
        <ContactItem>
          <PhoneAndroidIcon style={{ marginRight: "10px" }} />
          9843854669{" "}
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} /> hasinadhungel15@gmail.com{" "}
        </ContactItem>
      </Right>
      <Payment src="https://razorpay.com/blog-content/uploads/2020/09/life-cycle-of-card-payments-1.png" />
    </Container>
  );
};

export default Footer;
