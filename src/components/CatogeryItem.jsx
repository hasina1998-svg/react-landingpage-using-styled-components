import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100vh;
  position: relative;
  ${mobile({ height: "30vh" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.div`
  top: 0px;
  left: 0px;

  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;
const CatogeryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt="dress" />
      <Info>
        <Title>{item.title} </Title>
        <Button> SHOP NOW </Button>
      </Info>
    </Container>
  );
};

export default CatogeryItem;
