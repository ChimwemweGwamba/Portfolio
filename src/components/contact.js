import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90vh;
`;

const Heading = styled.h1`
  width: 40%;
`;

const Text = styled.p`
  width: 60%;
  margin: 2.5rem auto;
`;

const Button = styled.button`
`;

function Contact() {
  return (
    <Container>
      <Heading>
        Let's Get <a>In Touch</a>
      </Heading>

      <Text>
        Even I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </Text>

      <button>Send Message</button>
    </Container>
  );
}

export default Contact;
