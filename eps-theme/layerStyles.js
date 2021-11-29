import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"

export const layerStyles = extendTheme({
        base: {
            bg: 'gray.100',
            color: 'gray.500',
        },
        baseDark: {
            bg:  'gray.900',
            color: 'gray.300',
        },
        card: {
            bg: mode('whiteAlpha.500', 'whiteAlpha.100'),
            borderColor: mode('whiteAlpha.700', 'whiteAlpha.200'),
            borderWidth: '1px',
            borderRadius: 'base',
            p: '2',
            boxShadow: 'lg',
            _hover: {
                bg: mode('whiteAlpha.900', 'gray.700'),
            }
        },
        panel: {
            bg: mode('whiteAlpha.500', 'whiteAlpha.100'),
        },
        bar: {
            bg: mode('white', 'gray.700'),
        }
    }
    );

export default layerStyles;
