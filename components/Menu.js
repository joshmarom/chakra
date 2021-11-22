import { Flex, List } from '@chakra-ui/react'
import MenuListItem from "./MenuListItem";

export const Menu = ( { items = [] } ) => (
    <List w="full" fontSize="sm" as={ Flex } alignItems="stretch" flexDirection="column">
        { items.map( ( item, index) => (
            <MenuListItem key={index} {...item} />
        ) ) }
    </List>
)

export default Menu
