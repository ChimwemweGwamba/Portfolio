import React from "react";
import styled from "styled-components";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import django from "../assets/images/django.png";
import docker from "../assets/images/docker.jpg";
import js from "../assets/images/js.png";
import node from "../assets/images/Node.png";
import react from "../assets/images/react.png";
import ts from "../assets/images/ts.png";
import python from "../assets/images/python.png";
import "../index.css";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardLeft = styled.div`
  width: 40%;
`;

const Title = styled.h1`
  margin-bottom: 4rem;
`;

const CardRight = styled.div`
  width: 55%;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem 2rem;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 7px;
  box-shadow: black 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
`;

const SkillText = styled.p`
  font-size: 0.7rem;
  margin-top: 0.8rem;
  text-align: center;
`;

const Text = styled.p`
  margin: 2rem 0;
  text-align: justify;
`;

const Socials = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem 3rem;
`;

const SocialImage = styled.img`
  width: 2rem;
  height: 2rem;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

function About() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Container>
      <CardLeft>
        <Title>
          Skills &<a> experience</a>.
        </Title>

        <Text>
          I am a full-stack developer who specializes in building high-quality
          web and mobile applications using a variety of cutting-edge
          technologies. I have expertise in React and NodeJS with TypeScript,
          and I have a proven track record of delivering scalable and performant
          solutions for clients across diverse industries.
          <br />
          <br />
          Whether you need a custom web app, a mobile app, or a full-stack
          solution, I have the skills and experience to turn your ideas into
          reality. Let's work together to create something amazing.
        </Text>
      </CardLeft>

      <CardRight>
        <Skills>
          <Skill className="abc">
            <Image src={react} alt="react" />
            <SkillText>ReactJS</SkillText>
          </Skill>

          <Skill className="abc">
            <Image src={js} alt="js" />
            <SkillText>JavaScript</SkillText>
          </Skill>

          <Skill className="abc">
            <Image src={ts} alt="ts" />
            <SkillText>TypeScript</SkillText>
          </Skill>

          <Skill>
            <Image src={node} alt="node" />
            <SkillText>NodeJS</SkillText>
          </Skill>

          <Skill>
            <Image src={python} alt="docker" />
            <SkillText>Python</SkillText>
          </Skill>

          <Skill>
            <Image src={django} alt="django" />
            <SkillText>Django</SkillText>
          </Skill>

          <Skill>
            <Image src={docker} alt="docker" />
            <SkillText>Docker</SkillText>
          </Skill>
        </Skills>

        <Socials>
          <SocialImage
            src={github}
            alt="github"
            onClick={() => openInNewTab("https://github.com/ChimwemweGwamba")}
          />
          <SocialImage
            src={linkedin}
            alt="linkedin"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/chimwemwe-gwamba/")
            }
          />
          <SocialImage
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
