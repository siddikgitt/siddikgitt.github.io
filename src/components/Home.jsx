import { Box, Button, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Siddikkhan-Pathan-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Siddikkhan-Pathan-Resume.pdf";
        alink.click();
      });
    });
    window.open("https://drive.google.com/file/d/1F2HvFJmHTz_-oELDqe7MOp99uOl_Awx8/view", '_blank');

  };
  return (
    <div name="home">
      <Flex
        // columns={[1,1,2,2 ]}
        flexWrap={["wrap-reverse", "wrap-reverse", "wrap-reverse", "nowrap"]}
        alignItems={"center"}
        gap={20}
        marginBottom={50}
        marginTop={[10,10,20,20]}
        justifyContent={"space-around"}
      >
        
        <Box>
          <Text fontSize={["25px","25px","25px","35px"]} fontWeight="bold">
            Hello, my name is
          </Text>
          <Text lineHeight={2} fontWeight={"bold"} fontSize={["31px","31px","31px","50px"]}>
            Siddikkhan Pathan
          </Text>
          <Flex
            fontWeight={"bold"}
            fontSize={["21px","21px","21px","35px"]}
          >
            <Text>I'm a </Text>
            <Text paddingLeft={[2,2,2, 2.5]} color={"crimson"}> 
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Problem Solver",
                    "Front-End Developer",
                    "Software Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  pauseFor: 1000,
                }}
              />
            </Text>
          </Flex>
          <Box
            as="button"
            marginTop={"25px"}
            height="auto"
            padding={"10px 15px 10px 15px"}
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px"
            px="40px"
            borderRadius="7px"
            fontSize="20px"
            fontWeight="semibold"
            bg="crimson"
            borderColor="#ccd0d5"
            color="white"
            _hover={{ cursor: "pointer"}}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            onClick={onButtonClick}
          >
            Resume
          </Box>
        </Box>

        <Box>
          <Center>
          <Image

            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            borderRadius={"50%"}
            h={["300px", "300px", "250px", "350px"]}
            src={require("../Assets/logo.jpg")}
          />
          </Center>
          </Box>
          
      </Flex>
    </div>
  );
};

export default Home;
