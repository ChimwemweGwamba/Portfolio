import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; */
  border: solid 1px white;
  height: 100vh;
  scroll-snap-align: center;
`;

const Heading = styled.h1`
  width: 40%;
`;

const Text = styled.p`
  width: 60%;
  margin: 2.5rem auto;
`;

function Contact() {
  return (
    <Container>
      <h1>4</h1>
      {/* <Heading>
        Let's Get <a>In Touch</a>
      </Heading>

      <Text>
        I’m currently looking for any new opportunities, but whether you have a
        question or just want to say hi, my inbox is always open.
      </Text>

      <button>Send Message</button> */}
    </Container>
  );
}

export default Contact;
