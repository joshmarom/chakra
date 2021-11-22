import {Flex, Grid, GridItem} from "@chakra-ui/react";

export const ElementorIcon = () => (
    <Flex borderRadius="full" w={6} h={6} alignItems="center" justifyContent="center" bg="pink.800">
        <Grid templateRows="1fr 1fr 1fr" templateColumns="1fr 3fr" gap={0.5} w={2.5} h={2.5}>
            <GridItem colSpan={1} rowSpan={3} bg="pink.200"/>
            <GridItem colStart={2} colSpan={1} rowSpan={1} bg="pink.200"/>
            <GridItem colStart={2} colSpan={1} rowSpan={1} bg="pink.200"/>
            <GridItem colStart={2} colSpan={1} rowSpan={1} bg="pink.200"/>
        </Grid>
    </Flex>
);

export default ElementorIcon
