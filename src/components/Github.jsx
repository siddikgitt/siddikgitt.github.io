import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

import AOS from "aos";
import "aos/dist/aos.css";

const Github = () => {
  useEffect(() => {

    AOS.init({ duration: 1000 });
  }, [])
  return (
    <div style={{ marginBottom: "25px" }}>
      <Box marginTop={20}>
        <Center>
          <Heading fontSize={"31px"}>
            MY <span style={{ color: "crimson" }}>GITHUB </span>STATISTICS
          </Heading>
        </Center>
        <Center>
          <Box
            data-aos="flip-right"
            data-aos-duration="2000"
            marginTop={10}
            w={["90%", "90%"]}
          >
            <Center>
              <GitHubCalendar
                username="siddikgitt"
                blockSize={15}
                blockMargin={5}
                color="crimson"
                fontSize={16}
              />
            </Center>
          </Box>
        </Center>

        <Center>
          <Flex
            marginTop={[7, 7, 10, 10]}
            gap={[5, 0, 10, 10]}
            w={"80%"}
            flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
          >
            <Box>
              <Image
                data-aos="flip-right"
                data-aos-duration="2000"
                width={["80vw", "80vw", "80vw", "80vw"]}
                height={["45vh", "45vh", "45vh", "45vh"]}
                src="https://github-readme-streak-stats.herokuapp.com/?user=siddikgitt"
              />
            </Box>
            {/* <Box>
              <Image
                data-aos="flip-right"
                data-aos-duration="2000"
                width={["100%", "100%", "100%", "100%"]}
                src="https://github-readme-stats.vercel.app/api?username=siddikgitt&count_private=true&show_icons=true"
              />
            </Box> */}
          </Flex>
        </Center>
      </Box>
    </div>
  );
};

export default Github;
