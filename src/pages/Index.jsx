import { Box, Container, Heading, Text, VStack, Image, Stack, Link, Icon, HStack, Divider, Button } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            Neil Armstrong
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Astronaut, Aerospace Engineer, Naval Aviator & Test Pilot
          </Text>
        </Box>

        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1541873676-a18131494184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOZWlsJTIwQXJtc3Ryb25nfGVufDB8fHx8MTcxMjU0MzU4MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Neil Armstrong" mx="auto" />
        </Box>

        <Stack spacing={8} direction={{ base: "column", md: "row" }} justify="center">
          <VStack spacing={3} align="center">
            <Heading size="lg">About Me</Heading>
            <Text textAlign="center" px={{ base: 0, md: 8 }}>
              I was the first person to walk on the Moon during the Apollo 11 mission in 1969. My 'small step' was a giant leap in the history of exploration and space science.
            </Text>
          </VStack>

          <VStack spacing={3} align="center">
            <Heading size="lg">Career</Heading>
            <Text textAlign="center" px={{ base: 0, md: 8 }}>
              With a decorated career in the U.S. Navy and as a NASA astronaut, my work has contributed to significant advancements in aerospace and aeronautics.
            </Text>
          </VStack>
        </Stack>

        <HStack justify="center" spacing={4}>
          <Link href="https://instagram.com/neilarmstrong" isExternal>
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
          <Link href="https://twitter.com/neilarmstrong" isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="https://linkedin.com/in/neilarmstrong" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Link href="mailto:neilarmstrong@example.com" isExternal>
            <Icon as={FaEnvelope} w={6} h={6} />
          </Link>
        </HStack>

        <Divider />

        <VStack spacing={4} align="center">
          <Heading size="lg">Get in Touch</Heading>
          <Text textAlign="center" px={{ base: 0, md: 8 }}>
            Whether you'd like to discuss the cosmos, or you're interested in collaborative opportunities, I'd love to hear from you.
          </Text>
          <Button rightIcon={<FaPlus />} colorScheme="blue">
            Contact Me
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
