import React, { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
  DiHtml5,
  DiCss3Full,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";

import {
  SiMaterialui,
  SiExpress,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiStyledcomponents,
  SiBootstrap,
  SiRedux,
  SiChakraui,
} from "react-icons/si";

import Modesens from "../Assets/Projects/modesens.jpg";
import Toggl from "../Assets/Projects/toggl.jpg";
import DotAndKey from "../Assets/Projects/dotandkey.jpg";
import Youtube from "../Assets/Projects/miniYT.jpg";

const projectsData = [
  {
    imgPath: Modesens,
    title: "Modesens Clone",
    description:
      "ModeSens is a fashion technology company revolutionizing the way people shop online using a tech-forward approach.",
    link: "https://github.com/Deepumandal/Modesens",
    demo: "https://magnificent-bublanina-64e24e.netlify.app/",
    stack: ["react", "chakraui", "javascript", "git"],
  },
  {
    imgPath: Toggl,
    title: "Toggl Track Clone",
    description:
      "Toggl Track offers online time tracking and reporting services through their website along with mobile and desktop applications",
    link: "https://github.com/siddikgitt/toggl",
    demo: "https://togglcloneproject.vercel.app/",
    stack: ["react", "redux", "chakraui", "git", "mongodb"],
  },
  {
    imgPath: DotAndKey,
    title: "Dot&Key Clone",
    description:
      "This website is a clone of DotAndKey.com which is an best skincare e-commerce store available online.",
    link: "https://github.com/siddikgitt/DotAndKey-Clone",
    demo: "https://dontandkey.netlify.app/",
    stack: ["react", "chakraui", "javascript", "swiperJS"],
  },
  {
    imgPath: Youtube,
    title: "Youtube Mini",
    description:
      "YouTube Mini App is small application which work similarly as YouTube. You can play any video in this app.",
    link: "https://github.com/siddikgitt/miniYT",
    demo: "https://iridescent-faun-10897c.netlify.app/",
    stack: ["html", "css", "javascript"],
  },
];

const techStack = {
  javascript: <DiJavascript1 color="crimson" size="40px" />,
  react: <DiReact color="crimson" size="40px" />,
  node: <DiNodejs color="crimson" size="40px" />,
  mongodb: <DiMongodb color="crimson" size="40px" />,
  python: <DiPython color="crimson" size="40px" />,
  sql: <DiMysql color="crimson" size="40px" />,
  html: <DiHtml5 color="crimson" size="40px" />,
  css: <DiCss3Full color="crimson" size="40px" />,
  git: <DiGit color="crimson" size="40px" />,
  mui: <SiMaterialui color="crimson" size="40px" />,
  express: <SiExpress color="crimson" size="40px" />,
  vscode: <SiVisualstudiocode color="crimson" size="40px" />,
  postman: <SiPostman color="crimson" size="40px" />,
  heroku: <SiHeroku color="crimson" size="40px" />,
  styled: <SiStyledcomponents color="crimson" size="40px" />,
  bootstrap: <SiBootstrap color="crimson" size="40px" />,
  redux: <SiRedux color="crimson" size="40px" />,
  chakraui: <SiChakraui color="crimson" size="40px" />,
};

const Project = () => {
  useEffect(() => {

    AOS.init({ duration: 1000 });
  }, [])

  return (
    <div style={{ marginBottom: "25px" }} name="projects">
      <Center>
        <Heading fontSize={["25px", "25px", "36px", "36px"]}>
          MY <span style={{ color: "crimson" }}> CREATIVE </span> PROJECTS
        </Heading>
      </Center>
      <Center>
      <Box>
      <SimpleGrid marginTop={10} columns={[1, 1, 1, 2]} spacing={10}>
        {projectsData.map((el) => (
          <Center>
            <Box
              data-aos="flip-right"
              data-aos-duration="1000"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              border={"1.5px solid crimson"}
              borderRadius="15px"
              padding={"20px 20px"}
              alignItems={"center"}
              w={["90%", "90%", "450px", "450px"]}
            >
              <Image
                border={"2px solid crimson"}
                borderRadius={"15px"}
                marginTop={0}
                w={"100%"}
                src={el.imgPath}
              />
              <Text fontSize={"22px"} fontWeight={"bold"} textAlign="center">
                {el.title}
              </Text>
              <Text
                fontWeight={"semibold"}
                fontSize={"18px"}
                textAlign={"center"}
              >
                {el.description}
              </Text>
              <Center paddingTop={8} gap={18}>
                {el.stack.map((eq) => techStack[eq])}
              </Center>
              <Flex
                padding={"10px 0px 20px 0px"}
                justifyContent={"space-around"}
                alignItems="center"
              >
                {/* <Link isExternal href={el.demo}>
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
                    _hover={{ cursor: "pointer" }}
                    _active={{
                      bg: "#dddfe2",
                      transform: "scale(0.98)",
                      borderColor: "#bec3c9",
                    }}
                    _focus={{
                      boxShadow:
                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                    }}
                  >
                    Live
                  </Box>
                </Link> */}
                <Link isExternal href={el.link}>
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
                    _hover={{ cursor: "pointer" }}
                    _active={{
                      bg: "#dddfe2",
                      transform: "scale(0.98)",
                      borderColor: "#bec3c9",
                    }}
                    _focus={{
                      boxShadow:
                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                    }}
                  >
                    Code
                  </Box>
                </Link>
              </Flex>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
      </Box>
      </Center>
    </div>
  );
};

export default Project;
