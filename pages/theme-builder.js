import { Button, Container, Divider, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/system";
import Card from '../components/Card';
import {border as borderColor, text as textColor} from '../eps-theme/colors-by-mode';
import AppWrapper from "../components/AppWrapper";
import items from "../data/items";
import {LayoutGroup, motion} from "framer-motion"
import LibdaryModal from "../components/Modal";
import {useState} from "react";

export const Library = () => {
    const [ isOpen, setIsOpen ] = useState(false );
    const [ activeItem, setActiveItem ] = useState(0 );
    const headingColor = useColorModeValue( textColor.heading[0], textColor.heading[1] );

    return (
        <AppWrapper pageSlug="/library">
            <LayoutGroup>
                <Container maxW="container.xl" p={16} fontSize="sm">
                    <Heading as="h1" size="xl" mb={4}>Welcome to Elementor</Heading>
                    <Divider borderColor={useColorModeValue(borderColor.hr[0], borderColor.hr[1])} mb="4"/>
                    <Flex flexWrap="wrap" gridColumnGap={4}>
                        <Stack maxW={["100%", "100%", "100%", "66.6%"]} grow={1} spacing={4}>
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
                    </Flex>
                    <Grid gap={5} w="full" mt="6" templateColumns={{
                        base: "1fr", sm: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(4,1fr)" }}>
                        { [...items].map( (item, i) =>
                            <Card key={i} onClick={ () => {
                                setIsOpen( true );
                                setActiveItem( i );
                            } }
                                  {...item}/> ) }
                    </Grid>
                    <LibdaryModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <motion.div layoutId={`card${activeItem}`}>
                            <motion.div layoutId={`heading${activeItem}`}>
                                <Heading size="lg" color={headingColor}>{items[activeItem].title}</Heading>
                            </motion.div>
                        </motion.div>
                    </LibdaryModal>
                </Container>
            </LayoutGroup>
        </AppWrapper>
    )
}

export default Library;