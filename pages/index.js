import { Button, Container, Divider, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/system";
import TemplateCard from '../components/TemplateCard';
import { border as borderColor } from '../eps-theme/colors-by-mode';
import AppWrapper from "../components/AppWrapper";
import items from "../data/items";

export const Index = () =>
    <AppWrapper pageSlug="/">
        <Container maxW="container.xl" p={16} fontSize="sm">
            <Heading as="h1" size="xl" mb={4}>Welcome to Elementor</Heading>
            <Divider borderColor={useColorModeValue(borderColor.hr[0], borderColor.hr[1])} mb="4"/>
            <Flex flexWrap="wrap" gridColumnGap={4}>
                <Stack maxW={["100%","100%","100%","66.6%"]} grow={1} spacing={4}>
                    <Text as="p" fontSize="lg">
                        Elementor is a drag and drop page builder for WordPress.<br/>
                        It is a complete solution for creating beautiful pages in WordPress.
                    </Text>
                    <Text as="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex euismod, euismod nisi eu, consectetur nunc.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                        Elementor is a drag and drop page builder for WordPress. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec eget ex euismod, euismod nisi eu, consectetur nunc.
                        Fusce euismod, nisl eget consectetur consectetur, nisl nisi euismod nisi, euismod nisi
                        nisl euismod nisi.
                    </Text>
                </Stack>
                <Flex textAlign="center" grow={1} minW="max" flexDirection="column" alignItems="center"
                      borderRadius="lg" p={8} bg="gray.700">
                    <Heading as="h3" size="md" mb={5}>
                        <Stack>
                            <Text size="md" color="gray.50">Get more done</Text>
                            <Heading size="xs" fontWeight="light">with</Heading>
                            <Text size="md" color="pink.300">Elementor Pro</Text>
                        </Stack>
                    </Heading>
                    <Button size="sm" colorScheme="pink" variant="solid">Get Started</Button>
                </Flex>
            </Flex>

            <Grid gap={5} w="full" mt="6" templateColumns={{
                base: "1fr", sm: "1fr",  md: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(4,1fr)"
            }}>
                { [ ...items ].map( ( item, i ) => <TemplateCard key={i} {...item}/> ) }
            </Grid>
        </Container>
    </AppWrapper>

export default Index;