import React from "react";
import bannerImg from "../assets/images/selfie.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem 0;
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
`;

const CardRight = styled.div`
  display: flex;
  justify-content: center;
  width: 35%;
`;

const Image = styled.img`
  width: 95%;
  background: linear-gradient(315deg, #00FFFF, #ff0058);
  background-color: #ff00aa17;
  border-radius: 25% 25% 50% 50%;
  margin: 0 auto;
`;

const Heading = styled.h1``;

const SubHeading = styled.p``;

const Button = styled.button``;

function Banner() {
  return (
    <Container>
      <CardLeft>
        <Heading>
          Hi, I'm <a>Chimwemwe Gwamba</a>.
        </Heading>

        <SubHeading>A Fullstack Software Developer</SubHeading>
        <Button>My Resume</Button>
      </CardLeft>

      <CardRight>
        <Image src={bannerImg} alt="img" />
      </CardRight>
    </Container>
  );
}

export default Banner;
