import React from "react";
import styled from "styled-components";
import Project from "./project";

const Container = styled.div`
  border: solid 1px white;
  height: 100vh;
  scroll-snap-align: center;
`;

const Heading = styled.h5``;

const Title = styled.h1``;

function Projects() {
  return (
    <Container>
      <h1>3</h1>
      {/* <Heading>PROJECTS</Heading>

      <Title>
        Here are some of the <a>Projects</a> i've built
      </Title>

      <Project /> */}
    </Container>
  );
}

export default Projects;
