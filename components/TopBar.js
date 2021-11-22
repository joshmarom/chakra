import {Box, Flex, Heading} from '@chakra-ui/react'
import DarkModeSwitch from './DarkModeSwitch'

import { text as textColor } from '../eps-theme/colors-by-mode';
import { useColorModeValue } from "@chakra-ui/system";

export const TopBar = (props) => (
    <Flex as="header" boxShadow="sm" sx={{"gap": ".75rem"}} px={4} zIndex={3} alignItems={"center"} {...props}>
        { props.icon }
        <Heading as="h2" size="sm" color={ useColorModeValue( textColor.heading[0], textColor.heading[1] ) }>
            { props.pageTitle }
        </Heading>
        {props.children}
        <Box marginInlineStart={"auto"}>
            <DarkModeSwitch/>
            {props.actionButtons}
        </Box>
    </Flex> )

export default TopBar
