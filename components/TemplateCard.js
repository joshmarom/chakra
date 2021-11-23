import {Box, Heading, AspectRatio, Image, Text, Link, Flex} from '@chakra-ui/react';
import {text as textColor} from '../eps-theme/colors-by-mode';
import {useColorModeValue} from '@chakra-ui/system';
import TextEllipsis from 'react-text-ellipsis';

/**
 * @function TemplateCard
 * @description A card that displays a template
 * @param {Object} props
 * @returns {JSX}
 **/
const TemplateCard = (props) => (
  <Box bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
       _hover={{bg: useColorModeValue('whiteAlpha.900', 'gray.700')}}
       borderRadius="base" p={2} boxShadow="lg">
      <Flex alignItems="center" h={8} mb={1} mt={-1}>
          <Heading as="h2" size="xs" color={useColorModeValue(textColor.heading[0],textColor.heading[1])}>
              <TextEllipsis lines={1} tag={'span'} ellipsisChars={'...'}>
                  {props.title}
              </TextEllipsis>
          </Heading>
      </Flex>
      <AspectRatio ratio={1}>
          <Image src={props.image} alt={props.title} />
      </AspectRatio>
  </Box>
);

export default TemplateCard;
