import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact">
      <Box marginBottom={5}>
        <Center>
          <Heading fontSize={["25px", "25px", "36px", "36px"]}>
            <span style={{ color: "crimson" }}>CONTACT </span>ME
          </Heading>
        </Center>
        <Center>
          <Flex marginTop={7} gap={50}>
            <a
              href="https://www.linkedin.com/in/siddikkhan/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn color="crimson" size="27px"/>
            </a>
            <a
              href="https://github.com/siddikgitt"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub color="crimson" size="27px" />
            </a>
            <a
              href="https://www.hackerrank.com/siddikkhanpathan"
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaHackerrank color="crimson" size="27px" />
            </a>
            <a
              href={"tel:9076254108"}
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <BsFillTelephoneFill color="crimson" size="27px" />
            </a>
            <a
              href={"mailto:siddikkhanpathan4@gmail.com"}
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiTwotoneMail color="crimson" size="27px" />
            </a>
          </Flex>
        </Center>
      </Box>
    </div>
  );
};

export default Contact;
