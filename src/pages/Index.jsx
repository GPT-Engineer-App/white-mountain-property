import { Box, Heading, Text, Image, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { FaHome, FaBuilding, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex bg="gray.100" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">White Mountain Properties</Heading>
        <Flex>
          <Button variant="ghost" mr={2}>
            Home
          </Button>
          <Button variant="ghost" mr={2}>
            Properties
          </Button>
          <Button variant="ghost" mr={2}>
            About
          </Button>
          <Button variant="ghost" mr={2}>
            Services
          </Button>
          <Button variant="ghost" mr={2}>
            Testimonials
          </Button>
          <Button variant="ghost" mr={2}>
            FAQ
          </Button>
          <Button variant="ghost">Contact</Button>
        </Flex>
      </Flex>

      {/* Hero */}
      <Flex flexDirection="column" alignItems="center" justifyContent="center" minHeight="50vh" textAlign="center" bgImage="https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1vdW50YWlucyUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3MTEwNTQwMTh8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover">
        <Heading size="2xl" mb={4} color="white">
          Discover Your Perfect Mountain Getaway
        </Heading>
        <Text fontSize="xl" mb={8} color="white">
          Let us help you find and manage your dream vacation home in the White Mountains.
        </Text>
        <Button colorScheme="blue" size="lg">
          View Our Properties
        </Button>
      </Flex>

      {/* Featured Properties */}
      <Box p={8}>
        <Heading size="xl" mb={8} textAlign="center">
          Featured Properties
        </Heading>
        <SimpleGrid columns={3} spacing={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1475087542963-13ab5e611954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhYmluJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzExMDU0MDE4fDA&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
            <Heading size="md">Cozy Mountain Cabin</Heading>
            <Text>2 BR | 1 BA | Sleeps 4</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb3VudGFpbiUyMGhvbWV8ZW58MHx8fHwxNzExMDU0MDE5fDA&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
            <Heading size="md">Luxury Mountain Estate</Heading>
            <Text>6 BR | 4.5 BA | Sleeps 14</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1595521624992-48a59aef95e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBtb3VudGFpbiUyMGxvZGdlfGVufDB8fHx8MTcxMTA1NDAxOXww&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
            <Heading size="md">Rustic Mountain Lodge</Heading>
            <Text>4 BR | 3 BA | Sleeps 10</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Services */}
      <Box bg="gray.100" p={8}>
        <Heading size="xl" mb={8} textAlign="center">
          Our Services
        </Heading>
        <SimpleGrid columns={2} spacing={8}>
          <Box>
            <Heading size="lg">
              <FaHome /> Property Management
            </Heading>
            <Text>We handle all aspects of managing your vacation rental, from marketing to maintenance.</Text>
          </Box>
          <Box>
            <Heading size="lg">
              <FaBuilding /> Real Estate
            </Heading>
            <Text>Looking to buy or sell a mountain home? Our experienced agents are here to help.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact CTA */}
      <Flex flexDirection="column" alignItems="center" p={8} textAlign="center">
        <Heading size="xl" mb={4}>
          Ready to Get Started?
        </Heading>
        <Text fontSize="lg" mb={8}>
          Contact us today to learn more about our property management and real estate services.
        </Text>
        <Flex>
          <Button colorScheme="blue" size="lg" leftIcon={<FaPhone />} mr={4}>
            Call Us
          </Button>
          <Button colorScheme="blue" size="lg" leftIcon={<FaEnvelope />}>
            Email Us
          </Button>
        </Flex>
      </Flex>

      {/* Footer */}
      <Box bg="gray.900" p={8} color="white" textAlign="center">
        <Text>&copy; 2023 White Mountain Properties. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
