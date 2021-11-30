import { Flex, List } from '@chakra-ui/react'
import MenuListItem from "./MenuListItem";

export const Menu = ( { activeItem = '', items = [] } ) => {
    items = items.map( item => { return item.href === activeItem ? { ...item, active: 'true' } : item } );

    return (
    <List w="full" fontSize="sm" as={ Flex } alignItems="stretch" flexDirection="column" position="fixed" width="275px">
        { items.map( ( item, index) =>
            <MenuListItem key={index} {...item} />
        ) }
    </List>
) }

export default Menu
