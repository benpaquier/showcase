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
    game: "Bataille navale",
    figma: "https://www.figma.com/file/CJ55t9KThee2CMKrmehR8q/Bataille-navale?node-id=0%3A1",
    github: "https://github.com/Nascimento95/battleship",
    netlify: "https://heuristic-kowalevski-7e1ce4.netlify.app/",
    people: [
      {
        name: "Marco"
      },
      {
        name: "Ahmed",
      },
      {
        name: "Alin",
      },
      {
        name: "Hélène",
      }
    ]
  },
  {
    game: "Petits chevaux",
    figma: "https://www.figma.com/file/a4tUUHmZU0l3fqS7NibWZA/Untitled?node-id=0%3A1",
    github: "https://github.com/chaimakhorchid/-petits-chevaux",
    netlify: "https://petits-chevaux.netlify.app/",
    people: [
      {
        name: "Chaïma"
      },
      {
        name: "Jong",
      },
      {
        name: "Edouard",
      },
      {
        name: "Jérémy",
      }
    ]
  },
  {
    game: "2048",
    figma: "https://www.figma.com/file/BIf91K0BAankTLIt5iNbeu/Untitled?node-id=0%3A1",
    github: "https://github.com/karimoucisse/2048_projet",
    netlify: "https://projet-2048.netlify.app/",
    people: [
      {
        name: "Karimou"
      },
      {
        name: "Bilal",
      },
      {
        name: "Syrine",
      },
      {
        name: "Salwa",
      }
    ]
  },
  {
    game: "Puissance 4",
    figma: "https://www.figma.com/file/m7G2qk3TPC078teDRQdaGy/Game-Project?node-id=0%3A1",
    github: "https://github.com/vincennt/game-react",
    netlify: "https://quirky-euclid-d24af1.netlify.app/",
    people: [
      {
        name: "Vincent"
      },
      {
        name: "Evan",
      },
      {
        name: "Hanaa",
      },
      {
        name: "KévinA",
      }
    ]
  },
  {
    game: "Memory",
    figma: "https://www.figma.com/file/xjYSGhHAeS4OwWWXNhJvTh/Memory-Game",
    github: "https://github.com/BK-sensei/React-Memory",
    netlify: "https://the-best-memory-game.netlify.app/",
    people: [
      {
        name: "KevinJM"
      },
      {
        name: "Séverin",
      },
      {
        name: "Eloi",
      },
      {
        name: "Rebecca",
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
              key={box.game}
              w={{ base: "90%", sm: "300px", md: "100%"}}
              style={{
                borderImage: "linear-gradient(45deg, #7928CA, #FF0080) 1",
                borderWidth: "2px",
                borderRadius: '6px',
                margin: "0 auto"
              }}
              padding="4"
            > 
              <Heading as="h2" size="md">
                {box.game}
              </Heading>
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
                {box.people.map((p, i) => (
                  <Text key={p.name} as="span">{`${p.name}${i !== box.people.length - 1 ? ', ' : ''}`} </Text>
                ))}
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
