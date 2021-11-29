import { useColorMode, IconButton } from '@chakra-ui/react'
import { IoSunnySharp } from 'react-icons/io5';
import { BsMoonFill } from 'react-icons/bs';

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <IconButton
            aria-label="Dark Mode"
            isActive={ isDark }
            bg={ isDark ? 'gray.900' : 'gray.200' }
            _hover={ {
                bg: isDark ? 'gray.200' : 'gray.700',
                color: isDark ? 'gray.800' : 'cyan.200',
            } }
            _active={ { bg: 'gray.900' } }
            rounded={ "full" }
            size={ "sm" }
            onClick={ toggleColorMode }
            color={ isDark ? 'yellow.400' : 'gray.700' }
            icon={ isDark ?  <IoSunnySharp/> : <BsMoonFill/> } />
    )
}

export default DarkModeSwitch
