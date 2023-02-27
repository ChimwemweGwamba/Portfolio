import React from "react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem 0;
`;

const CardLeft = styled.div`
  width: 35%;
`;

const Title = styled.h1`
  margin: 0;
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
`;

const Heading = styled.h5`
  margin-bottom: 2.5rem;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;

const Skill = styled.p`
  color: #00ffff;
  margin: 1rem 0;
`;

const Text = styled.p`
  text-align: justify;
  margin: 0;
`;

const Socials = styled.p`
`;

const Image = styled.img`
  width: 2.1rem;
  margin-right: 3rem;
`;

function About() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Container>
      <CardLeft>
        <Title>
          Complex problems <a>excite me.</a> Efficient solutions <a>drive me.</a>
        </Title>
      </CardLeft>

      <CardRight>
        <Heading>ABOUT ME</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </Text>

        <Skills>
          <Skill>React</Skill>

          <Skill>NodeJS</Skill>

          <Skill>React Native</Skill>

          <Skill>TypeScript</Skill>

          <Skill>Data structures & algorithms</Skill>
        </Skills>

        <Socials>
          <Image
            src={github}
            alt="github"
            onClick={() => openInNewTab("https://github.com/ChimwemweGwamba")}
          />
          <Image
            src={linkedin}
            alt="linkedin"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/chimwemwe-gwamba/")
            }
          />
          <Image
            src={twitter}
            alt="twitter"
            onClick={() => openInNewTab("https://twitter.com/Chim_dawg")}
          />
        </Socials>
      </CardRight>
    </Container>
  );
}

export default About;
