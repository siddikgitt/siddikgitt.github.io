import React, { useState } from "react";
import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { IconBase } from "react-icons";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import CV from "../Assets/Siddikkhan-Pathan-Resume.pdf"

const Navbar = () => {
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
    // changeDisplay("none")
  };

  const [display, changeDisplay] = useState("none");

  return (
    <div style={{ position: "sticky", top: 0, zIndex:"100000" }}>
      <Flex
        backgroundColor={"white"}
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding="10px 20px 10px 20px"
        zIndex={100000}
        >
        <Heading fontWeight={"bold"} fontSize={31}>
          SIDDIK
          <span style={{ color: "crimson", fontWeight: "bold" }}>KHAN</span>
        </Heading>

        <Flex>
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link to={"home"} offset={-100} smooth duration={500}>
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
              >
                HOME
              </Text>
            </Link>
            <Link to={"about"} offset={-100} smooth duration={500}>
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
              >
                ABOUT
              </Text>
            </Link>
            <Link offset={-100} smooth duration={500} to="skills">
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
              >
                SKILLS
              </Text>
            </Link>
            <Link offset={-100} smooth duration={500} to="projects">
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
              >
                PROJECTS
              </Text>
            </Link>
            <Link offset={-100} smooth duration={500} to="contact">
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
              >
                CONTACT
              </Text>
            </Link>
            <Text
              onClick={onButtonClick}
              padding={"10px 15px 10px 15px"}
              borderRadius="10px"
              cursor={"pointer"}
              _hover={{ color: "white", backgroundColor: "crimson" }}
              fontSize={18}
            >
              RESUME
            </Text>
          </Flex>
          <IconButton
            aria-label="Open Menu"
            size={"lg"}
            mr={2}
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => changeDisplay("flex")}
          />
        </Flex>

        <Flex
          w={"100vw"}
          backgroundColor="white"
          zIndex={20}
          h="100%"
          position={"fixed"}
          top="0"
          left={"0"}
          overflow="auto"
          flexDir={"column"}
          display={display}
        >
          <Flex justify={"flex-end"}>
            <IconButton
              mt={2}
              marginRight={2}
              aria-label="Close Menu"
              size="lg"
              icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}

            />
          </Flex>
          <Flex flexDir={"column"} alignItems="center">
            <Link to={"home"} offset={-100} smooth duration={500}>
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
                color="crimson"
                onClick={() => changeDisplay("none")}
              >
                HOME
              </Text>
            </Link>
            <Link to={"about"} offset={-100} smooth duration={500}>
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
                color="crimson"
                onClick={() => changeDisplay("none")}
              >
                ABOUT
              </Text>
            </Link>
            <Link offset={-100} smooth duration={500} to="skills">
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
                color="crimson"
                onClick={() => changeDisplay("none")}
              >
                SKILLS
              </Text>
            </Link>
            <Link offset={-100} smooth duration={500} to="projects">
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
                color="crimson"
                onClick={() => changeDisplay("none")}
              >
                PROJECTS
              </Text>
            </Link>
            <Link offset={-100} smooth duration={500} to="contact">
              <Text
                padding={"10px 15px 10px 15px"}
                borderRadius="10px"
                cursor={"pointer"}
                _hover={{ color: "white", backgroundColor: "crimson" }}
                fontSize={18}
                color="crimson"
                onClick={() => changeDisplay("none")}
              >
                CONTACT
              </Text>
            </Link>
            <Text
              onClick={onButtonClick}
              padding={"10px 15px 10px 15px"}
              borderRadius="10px"
              cursor={"pointer"}
              _hover={{ color: "white", backgroundColor: "crimson" }}
              fontSize={18}
              color="crimson"
            >
              RESUME
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
