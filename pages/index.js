import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/system";
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import TemplateCard from '../components/TemplateCard';
import ElementorIcon from '../components/ElementorIcon';
import { bg as bgColor, text as textColor, border as borderColor } from '../eps-theme/colors-by-mode';

const Index = () => {
    const colors = {
        appBgColor: useColorModeValue(bgColor.canvas[0], bgColor.canvas[1]),
        sideBgColor: useColorModeValue(bgColor.panel[0], bgColor.panel[1]),
        topBarBgColor: useColorModeValue(bgColor.bar[0], bgColor.bar[1]),
        bodyTextColor: useColorModeValue(textColor.body[0], textColor.body[1]),
        borderColor: useColorModeValue(borderColor.hr[0], borderColor.hr[1]),
    };

    const menuItems = [
        {
            title: 'Home',
            href: '/',
            icon: 'home',
            active: true,
        },
        {
            title: 'About',
            href: '/about',
            icon: 'info',
        },
        {
            title: 'Contact',
            href: '/contact',
            icon: 'mail',
        },
        {
            title: 'Theme Builder',
            href: '/theme-builder',
            icon: 'window',
        },
        {
            title: 'Import/Export',
            href: '/import-export',
            icon: 'upload',
        }
    ];

    return (
    <Grid h="100vh" templateRows="50px 1fr" templateColumns="275px 1fr" bg={colors.appBgColor} color={colors.bodyTextColor}>
        <GridItem as={TopBar} colSpan={2} bg={colors.topBarBgColor} icon={<ElementorIcon/>}
                  pageTitle="Elementor App Built with Chakra"/>
        <GridItem as={Sidebar} bg={colors.sideBgColor} boxShadow="lg" zIndex={2} items={ menuItems } />
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
                    <Box marginInlineStart="auto" textAlign="center" minW="xs">
                        <Heading as="h3" size="sm" mb={5}>Get more features with Elementor Pro</Heading>
                        <Button size="sm" colorScheme="pink" variant="solid">Get Started</Button>
                    </Box>
                </Flex>

                <Grid gap={5} w="full" mt="6"
                      templateColumns={{
                          base: "1fr",
                          sm: "1fr 1fr",
                          md: "repeat(3,1fr)",
                          lg: "repeat(4,1fr)",
                          xl: "repeat(5,1fr)" }}>
                    { [1,2,3,4,5,6,7,8,9,10].map( i =>
                        <TemplateCard key={i}
                                      title="Test Title Words"
                                      image={`https://picsum.photos/id/${i * 12}/200/300`}/>)}
                </Grid>
            </Container>
        </GridItem>
    </Grid>
    )
};

export default Index