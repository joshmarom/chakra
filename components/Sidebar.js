import { Flex } from '@chakra-ui/react';
import { Menu } from './Menu';

export const Sidebar = ( props ) => (
    <Flex py="1.5rem" {...props}>
        <Menu items={props.items}/>
    </Flex>
);

export default Sidebar