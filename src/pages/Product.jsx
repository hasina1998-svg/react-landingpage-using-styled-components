import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { mobile } from "../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ wpadding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px opx;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.p`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSizeOption = styled.option``;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30%;
  height: 30%;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://static.zara.net/photos///2021/I/0/1/p/6045/227/407/2/w/1920/6045227407_6_1_1.jpg?ts=1626769513633" />
        </ImgContainer>
        <InfoContainer>
          <Title> Happy Shopping </Title>
          <Description>
            {" "}
            Jeans are a type of pants or trousers, typically made from denim or
            dungaree cloth.Jean cloth can be entirely cotton as well, similar to
            denim. Originally designed for miners, modern jeans were popularized{" "}
          </Description>
          <Price> $40 </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="green" />
            </Filter>

            <Filter>
              <FilterTitle> Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption> Size</FilterSizeOption>
                <FilterSizeOption> XS</FilterSizeOption>
                <FilterSizeOption> S</FilterSizeOption>
                <FilterSizeOption> M</FilterSizeOption>
                <FilterSizeOption> L</FilterSizeOption>
                <FilterSizeOption> XL</FilterSizeOption>

                <FilterTitle> Size</FilterTitle>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1 </Amount>

              <AddIcon />
            </AmountContainer>
            <Button> ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
