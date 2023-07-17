import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiExpress,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiNodemon,
  SiPostman,
  SiRailway,
  SiRedux,
  SiSwiper,
  SiVercel,
} from "react-icons/si";

import AOS from 'aos';
import 'aos/dist/aos.css';

let skillsData = [
  {
    icon: <AiFillHtml5 color="crimson" size="50px" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt color="crimson" size="50px" />,
    name: "CSS",
  },
  {
    icon: <FaBootstrap color="crimson" size="50px" />,
    name: "Bootstrap",
  },
  {
    icon: <SiJavascript color="crimson" size="50px" />,
    name: "Javascript",
  },
  {
    icon: <FaReact color="crimson" size="50px" />,
    name: "React",
  },
  {
    icon: <SiRedux color="crimson" size="50px" />,
    name: "Redux",
  },
  {
    icon: <SiChakraui color="crimson" size="50px" />,
    name: "Chakra UI",
  },
  {
    icon: <SiNodedotjs color="crimson" size="50px" />,
    name: "Node JS",
  },
  {
    icon: <SiExpress color="crimson" size="50px" />,
    name: "Express",
  },
  {
    icon: <SiMongodb color="crimson" size="50px" />,
    name: "MongoDB",
  },
  {
    icon: <FaGitAlt color="crimson" size="50px" />,
    name: "Git",
  },
  {
    icon: <SiPostman color="crimson" size="50px" />,
    name: "Postman",
  },
  {
    icon: <SiSwiper color="crimson" size="50px" />,
    name: "Swiper JS",
  },
  {
    icon: <SiNetlify color="crimson" size="50px" />,
    name: "Netlify",
  },
  {
    icon: <SiVercel color="crimson" size="50px" />,
    name: "Vercel",
  },
  {
    icon: <SiHeroku color="crimson" size="50px" />,
    name: "Heroku",
  },
  {
    icon: <SiRailway color="crimson" size="50px" />,
    name: "Railway",
  },
  {
    icon: <SiNodemon color="crimson" size="50px" />,
    name: "Nodemon",
  }
  
];

const Skills = () => {
  useEffect(() => {

    AOS.init({ duration: 1000 });
  }, [])
  
  return (
    <div name="skills">
      <Box marginBottom={"65px"}>
        <Center>
          <Heading fontSize={["25px","25px","36px","36px"]}>
            MY <span style={{ color: "crimson" }}>TECHNICAL</span> SKILLS
          </Heading>
        </Center>
        <Center>
          <Box>
            <SimpleGrid marginTop={10} columns={[2,2,4,6]} spacing={10}>
              {skillsData.map((el) => (
                <Container
                data-aos="zoom-in"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                centerContent
                  border={"1.5px solid crimson"}
                  borderRadius="15px"
                  padding={"7px 0px 7px 0px"}
                  alignItems={"center"}
                  h={"90px"} w={"150px"}
                >
                    <span>{el.icon}</span>
                    
                    <Text>{el.name}</Text>
                </Container>
              ))}
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default Skills;
