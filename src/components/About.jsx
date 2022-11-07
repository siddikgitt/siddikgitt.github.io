import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <div name="about">
      <Flex
        flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
        padding={"0px 35px 80px 35px"}
        alignItems={"center"}
        gap={20}
        marginTop={160}
        marginBottom={35}
        justifyContent={"space-around"}
      >
        <Box w={"100%"}>
          <Image h={["250px","250px","250px","350px"]} src={require("../Assets/homeIcon.png")} />
        </Box>
        <Box>
            <Center>
          <Heading fontSize={"36px"}>
            ALL <span style={{ color: "crimson" }}>ABOUT</span> ME
          </Heading>
          </Center>
          <UnorderedList marginTop={7} lineHeight={2}>
            <ListItem fontSize={["15px", "15px","15px","20px"]}>
              Hello! My name is Siddikkhan Pathan & I enjoy creating things that
              live on the internet. I'm a passionate Developer, with strong
              administrative & communication skills, good attention to detail &
              the ability to write efficient code.
            </ListItem>
            <ListItem fontSize={["15px", "15px","15px","20px"]}>
              I love problem solving and programing
            </ListItem>
            <ListItem fontSize={["15px", "15px","15px","20px"]}>
              My field of Interest's are building new Web Technologies, Products
              and in Data Structures and Algorithms.
            </ListItem>
            <ListItem fontSize={["15px", "15px","15px","20px"]}>
              Whenever possible, I also apply my passion for developing products
              with Node.js and Modern Javascript Library and Frameworks like
              React.js
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </div>
  );
};

export default About;
