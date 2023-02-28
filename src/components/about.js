import React from "react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  text-align: center;
`;

const CardLeft = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  margin: 2rem 0;
`;

const CardRight = styled.div`
  width: 80%;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 1rem;
`;

const Skill = styled.p`
  color: #00ffff;
  margin: 1rem 0;
`;

const Text = styled.p`
  margin: 2rem 0;
`;

const Socials = styled.p``;

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
          Complex problems <a>excite me.</a> Efficient solutions{" "}
          <a>drive me.</a>
        </Title>
      </CardLeft>

      <CardRight>
        <Text>
          I am a full-stack developer who specializes in creating high-quality
          web and mobile applications using a variety of cutting-edge
          technologies. I have expertise in React and NodeJS with TypeScript,
          and I have a proven track record of delivering scalable and performant
          solutions for clients across diverse industries. Whether you need a
          custom web app, a mobile app, or a full-stack solution, I have the
          skills and experience to turn your ideas into reality. Let's work
          together to create something amazing.
        </Text>

        <Skills>
          <Skill>React</Skill>

          <Skill>NodeJS</Skill>

          <Skill>TypeScript</Skill>
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
