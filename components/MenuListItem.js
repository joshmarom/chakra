import {Link as ChakraLink, Flex, ListIcon, ListItem, Text, Center} from "@chakra-ui/react";
import {useColorModeValue} from "@chakra-ui/system";
import {useState} from "react";

export const MenuItem = (props) => {
    const [isHover, setIsHover] = useState(false);
    const textColor = useColorModeValue(
        isHover ? 'gray.900' : 'gray.700',
        isHover ? 'gray.50' : 'gray.200');
    const hoverStyle = { color: 'cyan.400', textDecoration: 'none' };
    const activeStyle = props.active &&
        { bg: useColorModeValue( 'white', 'gray.700' ), boxShadow: 'sm', ...hoverStyle };

    return (
        <ListItem onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Flex as={ ChakraLink } py={2} paddingInlineStart={7} lineHeight={7} alignItems="center" grow={1}
                  _hover={ hoverStyle } { ...activeStyle } transition="color 250ms" { ...props }>
                <Center fontSize="lg" marginInlineEnd={4}>{props.icon}</Center>
                <Text transition="color 250ms" lineHeight={2} color={ textColor }>{ props.title }</Text>
            </Flex>
        </ListItem>
    );
}

export default MenuItem;
