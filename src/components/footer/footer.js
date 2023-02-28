import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    padding: 0.625rem 0;
    text-align: center;
`;


function Footer() {
  return (
    <Container>
        <p>
           Designed & built by Chimwemwe Gwamba
        </p>
    </Container>
  )
}

export default Footer