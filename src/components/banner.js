import React from "react";
import bannerImg from "../assets/images/selfie.png";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
`;

const Heading = styled.h1``;
const SubHeading = styled.p`
  margin: 30px 0;
`;
const Button = styled.button``;

function Banner() {
  return (
    <Container>
      <CardLeft>
        <Heading>
          Hi, I'm <a>Chimwemwe Gwamba</a>.
        </Heading>

        <SubHeading>
          A full-stack developer who specializes in building high-quality
          applications.
        </SubHeading>

        <Button>Download Resume</Button>
      </CardLeft>

      <CardRight>
        <Image src={bannerImg} alt="img" />
      </CardRight>
    </Container>
  );
}

export default Banner;
