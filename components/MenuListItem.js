import {
    Link as ChakraLink,
    Flex,
    ListIcon,
    ListItem, Text,
} from "@chakra-ui/react";
import {useColorModeValue} from "@chakra-ui/system";
import {useState} from "react";

const MenuItem = (props) => {
    const [isHover, setIsHover] = useState(false);
    const activeBgColor = useColorModeValue( 'white', 'gray.700' );

    return (
        <ListItem as={Flex} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
            bg={props.active ? activeBgColor : ''}>
            <Flex as={ChakraLink} href={props.href}
                  py={2} paddingInlineStart={7} paddingInlineEnd={2}
                  _hover={{ color: 'cyan.400', textDecoration: 'none' }}
                  transition="color 250ms" lineHeight={7}
                  alignItems="center" grow={1} {...props}>
                <ListIcon color="currentColor" icon={props.icon} />
                <Text transition="color 250ms" color={ useColorModeValue(
                      isHover ? 'gray.900' : 'gray.700',
                      isHover ? 'gray.50' : 'gray.200') }>{props.title}</Text>
            </Flex>
    </ListItem>);
}

export default MenuItem;
