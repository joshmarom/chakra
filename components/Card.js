import {Box, Heading, AspectRatio, Image, Text, Link, Flex, Center} from '@chakra-ui/react';
import {text as textColor} from '../eps-theme/colors-by-mode';
import {useColorModeValue} from '@chakra-ui/system';
import TextEllipsis from 'react-text-ellipsis';
import { AiOutlineEye } from 'react-icons/ai'
import {useState} from "react";
import { motion } from "framer-motion";
import LibdaryModal from "./Modal";

const Card = (props) => {
    const [ isHover, setIsHover ] = useState(false );
    const [ isOpen, setIsOpen ] = useState(false );

    return ( <motion.div
             whileHover={{ scale: 1.025 }}
             whileTap={{ scale: 0.975 }}>
        <Box bg={ useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} overflow="hidden"
             _hover={{bg: useColorModeValue('whiteAlpha.900', 'gray.700')}}
             borderRadius="lg" boxShadow="lg"
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
             onClick={() => setIsOpen( true )}
        >
            <AspectRatio ratio={1}>
                <>
                    <Image src={props.image} alt={props.title} />
                    <Box position="absolute" w="100%" h="100%"
                         opacity={ isHover ? 1 : 0 }
                         bg={ useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}>
                        <Center color={useColorModeValue(textColor.heading[0],textColor.heading[1])}>
                            <AiOutlineEye fontSize="4rem"/>

                            <LibdaryModal isOpen={ isOpen } onClose={ () => setIsOpen(false) }><Heading>Hello!</Heading></LibdaryModal>
                        </Center>
                    </Box>
                </>
            </AspectRatio>
            <Flex alignItems="center" h={8} px={4} py={6}>
                <Heading as="h2" size="xs" color={useColorModeValue(textColor.heading[0],textColor.heading[1])}>
                    <TextEllipsis lines={1} tag="span" ellipsisChars="...">
                        {props.title}
                    </TextEllipsis>
                </Heading>
            </Flex>
        </Box>
    </motion.div>
    );
}

export default Card;
