import React from 'react'
import styled from "styled-components";
import Project from '../project';


const Container = styled.div`
  padding: 5rem 0;
`;

const Heading = styled.h5`
`;

const Title = styled.h1`
`;


function ProjectSection() {
  return (
    <Container>

          <Heading>
            PROJECTS
          </Heading>

          <Title>
              Here are some of the <a>Projects</a> i've built
          </Title>


        <Project/>

    </Container>
  )
}

export default ProjectSection