import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/system";
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import TemplateCard from '../components/TemplateCard';
import ElementorIcon from '../components/ElementorIcon';
import menuItems from '../data/mainMenu';
import { bg as bgColor, text as textColor, border as borderColor } from '../eps-theme/colors-by-mode';
import faker from "faker";

const Index = () => {
    const colors = {
        appBgColor: useColorModeValue(bgColor.canvas[0], bgColor.canvas[1]),
        sideBgColor: useColorModeValue(bgColor.panel[0], bgColor.panel[1]),
        topBarBgColor: useColorModeValue(bgColor.bar[0], bgColor.bar[1]),
        bodyTextColor: useColorModeValue(textColor.body[0], textColor.body[1]),
        borderColor: useColorModeValue(borderColor.hr[0], borderColor.hr[1]),
    };

    /*
    * Each card has a title, and an image from the url https://picsum.photos/id/{itemId}/200/300, .
    * */
    const itemsData = ( count = 20 ) => {
        const items = [];
        for ( let i = 0; i < count; i++ ) {
            items.push({
                title: faker.company.companyName(),
                image: `https://picsum.photos/seed/${i*7}/300/300`,
                description: faker.lorem.paragraph(),
            });
        }

        return items;
    }

    const items = itemsData();

    return (
        <Grid minH="100vh" templateRows="50px 1fr" templateColumns="275px 1fr" bg={colors.appBgColor} color={colors.bodyTextColor}>
            <GridItem as={TopBar} colSpan={2} bg={colors.topBarBgColor}
                      icon={<ElementorIcon/>}
                      pageTitle="Elementor App Built with Chakra"/>
            <GridItem as={Sidebar} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} boxShadow="lg" zIndex={2} items={ menuItems } />
            <GridItem>
                <Container maxW="container.xl" p={16} fontSize="sm">
                    <Heading as="h1" size="lg" mb={4}>Welcome to Elementor</Heading>
                    <Divider borderColor={colors.borderColor} mb="4"/>
                    <Flex>
                        <Box>
                            <Text as="p" mb="4">
                                Elementor is a drag and drop page builder for WordPress.
                                It is a complete solution for creating beautiful pages in WordPress.
                            </Text>
                            <Text as="p" mb="4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec eget ex euismod, euismod nisi eu, consectetur nunc.
                                Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                                Elementor is a drag and drop page builder for WordPress. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec eget ex euismod, euismod nisi eu, consectetur nunc.
                                Fusce euismod, nisl eget consectetur consectetur, nisl nisi euismod nisi, euismod nisi nisl euismod nisi.
                            </Text>
                        </Box>
                        <Flex marginInlineStart="auto" textAlign="center" minW="xs" flexDirection="column" alignItems="center">
                            <Heading as="h3" size="md" colorScheme="gray" fontWeight="normal" mb={1}>Get more done</Heading>
                            <Heading as="h3" size="xs" fontWeight="normal" mb={1}>with</Heading>
                            <Heading as="h3" size="md" color="pink.400" mb={5}>Elementor Pro</Heading>
                            <Button size="sm" colorScheme="pink" variant="solid">Get Started</Button>
                        </Flex>
                    </Flex>

                <Grid gap={5} w="full" mt="6"
                      templateColumns={{
                          base: "1fr",
                          sm: "1fr 1fr",
                          md: "repeat(3,1fr)",
                          lg: "repeat(4,1fr)",
                          xl: "repeat(5,1fr)" }}>
                    { [ ...items ].map( ( item, i ) => <TemplateCard key={i} {...item}/> ) }
                </Grid>
            </Container>
        </GridItem>
    </Grid>
    )
};

export default Index