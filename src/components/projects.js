import React from "react";
import styled from "styled-components";
import Project from "./project";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Title = styled.h1``;

function Projects() {
  return (
    <Container>
      <Title>
        Here are some of the <a>Projects</a> i've built.
      </Title>

      <Project />
    </Container>
  );
}

export default Projects;
