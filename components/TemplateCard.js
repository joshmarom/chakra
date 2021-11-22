import {Box, Heading, AspectRatio, Image, Text, Link, Flex} from "@chakra-ui/react";
import {bg as bgColor, text as textColor} from '../eps-theme/colors-by-mode';
import {useColorModeValue} from "@chakra-ui/system";

/**
 * @function TemplateCard
 * @description A card that displays a template
 * @param {Object} props
 * @returns {JSX}
 **/
const TemplateCard = (props) => (
  <Box bg={useColorModeValue(bgColor.card[0],bgColor.card[1])} borderRadius="base" p={2} boxShadow="lg">
      <Flex>
          <Heading as="h2" size="xs" color={useColorModeValue(textColor.body[0],textColor.body[1])}>{props.title}</Heading>
      </Flex>
      <AspectRatio ratio={1}>
        <Image src={props.image} alt={props.title} />
      </AspectRatio>
  </Box>
);

export default TemplateCard;