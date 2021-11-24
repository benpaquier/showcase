import { useEffect } from "react"

import './App.css'

import {
  useColorMode,
  Container,
  Grid,
  Box,
  Heading,
  Center,
  Flex,
  Text
} from "@chakra-ui/react"

import { LinkIcon } from "@chakra-ui/icons"

const boxes = [
  {
    figma: "https://www.figma.com/file/UZ4JCvkcJ2GGW5n9SRkkqH/Untitled?node-id=1%3A2",
    github: "https://github.com/vincennt/trippy",
    netlify: "https://laughing-lichterman-090d89.netlify.app/",
    trello: "https://trello.com/b/LsAD6UMB/trippy-alin-vincent-s%C3%A9verin-hanaa",
    people: [
      {
        name: "Alin"
      },
      {
        name: "Vincent",
      },
      {
        name: "Séverin",
      },
      {
        name: "Hanaa",
      }
    ]
  },
  {
    figma: "https://www.figma.com/file/xjYSGhHAeS4OwWWXNhJvTh/Memory-Game?node-id=96%3A2",
    github: "https://github.com/Edouard-Germain/Trippy",
    netlify: "https://musing-golick-a3923d.netlify.app/",
    trello: "https://trello.com/b/YrvPs3XA/trippy-react",
    people: [
      {
        name: "Eloi"
      },
      {
        name: "Edouard",
      },
      {
        name: "Bilal",
      }
    ]
  },
  {
    figma: "https://www.figma.com/file/mXLFdkIrU5sOBo1sOTZSCw/TRIPPY?node-id=0%3A1",
    github: "https://github.com/E-Kuru/trippy-project",
    netlify: "https://trippy-project-ekjs.netlify.app/",
    trello: "https://trello.com/b/0FBIIDFN/conduite-de-projet",
    people: [
      {
        name: "Evan"
      },
      {
        name: "KevinJM",
      },
      {
        name: "Jeremy",
      },
      {
        name: "Syrine",
      }
    ]
  },
  {
    figma: "https://www.figma.com/file/7I9fFBuo26m7g8W9aVhTET/Untitled?node-id=8%3A12",
    github: "https://github.com/BK-sensei/Trippy",
    netlify: "https://trippy-agency.netlify.app/",
    trello: "https://trello.com/b/pGuhlUce/trippy",
    people: [
      {
        name: "Marco"
      },
      {
        name: "Rebecca",
      },
      {
        name: "KevinA",
      }
    ]
  },
  {
    figma: "https://www.figma.com/file/cpVI2Zb0WmzFT80dPTHef7/Untitled?node-id=0%3A1",
    github: "",
    netlify: "",
    trello: "https://trello.com/b/iW3F5OXs/trippy",
    people: [
      {
        name: "Jong"
      },
      {
        name: "Ahmed",
      },
      {
        name: "Karimou",
      }
    ]
  },
  {
    figma: "https://www.figma.com/file/mN8IFshDp5iDjCQqdzTZSi/Trippy?node-id=0%3A1",
    github: "https://github.com/chaimakhorchid/Trippy",
    netlify: "https://trippy-travel.netlify.app/",
    trello: "https://trello.com/b/rIi0qMWW/trippy",
    people: [
      {
        name: "Salwa"
      },
      {
        name: "Chaïma",
      },
      {
        name: "Hélène",
      }
    ]
  }
]

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode()
    }
  }, [colorMode, toggleColorMode])

  return (
    <Container maxW="container.md" color="#4A5568">
      <Flex minH="100vh" w="100%" direction="column-reverse" justifyContent="space-around" marginBottom={{ base: "50px", sm: "50px", lg: "0px"}}>
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
          {boxes.map(box => (
            <Box
              key={box.trello}
              w={{ base: "90%", sm: "300px", md: "100%"}}
              style={{
                borderImage: "linear-gradient(45deg, #7928CA, #FF0080) 1",
                borderWidth: "2px",
                borderRadius: '6px',
                margin: "0 auto"
              }}
              padding="4"
            > 
              <Box my="3">
                  {box.people.map((p, i) => (
                    <Text key={p.name} as="span" fontSize="22px"><b>{`${p.name}${i !== box.people.length - 1 ? ', ' : ''}`} </b></Text>
                  ))}
              </Box>
              <Box my="3">
                <LinkIcon w={3} h={3} marginRight="10px"/>
                <a href={box.figma} target="_blank" rel="noreferrer">
                  <Text
                    as="span"
                    fontWeight="700"
                    bgGradient="linear(to-b, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    figma
                  </Text>
                </a>
              </Box>
              <Box my="3">
                <LinkIcon w={3} h={3} marginRight="10px"/>
                <a href={box.github} target="_blank" rel="noreferrer">
                  <Text
                    as="span"
                    fontWeight="700"
                    bgGradient="linear(to-r, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    github
                  </Text>
                </a>
              </Box>
              <Box my="3">
                <LinkIcon w={3} h={3} marginRight="10px"/>
                <a href={box.netlify} target="_blank" rel="noreferrer">
                  <Text
                    as="span"
                    fontWeight="700"
                    bgGradient="linear(to-t, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    netlify
                  </Text>
                </a>
              </Box>
              <Box my="3">
                <LinkIcon w={3} h={3} marginRight="10px"/>
                <a href={box.trello} target="_blank" rel="noreferrer">
                  <Text
                    as="span"
                    fontWeight="700"
                    bgGradient="linear(to-t, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    trello
                  </Text>
                </a>
              </Box>
            </Box>
          ))}
        </Grid>
        <Center>
          <Heading
            as="h1"
            size="4xl"
            bgClip="text"
            className="animated-background"
            marginTop={{ base: "50px", sm: "50px", lg: "0px" }}
            marginBottom={{ base: "50px", sm: "50px", lg: "0px" }}
          >
            Showcase.
          </Heading>
        </Center>
      </Flex>
    </Container>
  );
}

export default App;
