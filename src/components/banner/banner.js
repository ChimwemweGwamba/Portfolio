import React from "react";
import bannerImg from "../../assets/images/selfie.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5.2rem 0;
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
  width: 100%;
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
