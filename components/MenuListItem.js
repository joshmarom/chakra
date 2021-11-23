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
    const textColor = useColorModeValue(
        isHover ? 'gray.900' : 'gray.700',
        isHover ? 'gray.50' : 'gray.200');
    const hoverStyle = { color: 'cyan.400', textDecoration: 'none' };
    const activeStyle = { bg: useColorModeValue( 'white', 'gray.700' ), boxShadow: 'sm', ...hoverStyle };

    return (
        <ListItem onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Flex as={ ChakraLink } py={2} paddingInlineStart={7} lineHeight={7} alignItems="center" grow={1}
                  _hover={ hoverStyle } _active={ activeStyle } transition="color 250ms" data-active={props.active} { ...props }>
                <ListIcon icon={ props.icon } />
                <Text transition="color 250ms" color={ textColor }>{ props.title }</Text>
            </Flex>
        </ListItem>
    );
}

export default MenuItem;
