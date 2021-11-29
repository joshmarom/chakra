import {useColorModeValue} from "@chakra-ui/system";
import {bg as bgColor, text as textColor} from "../eps-theme/colors-by-mode";
import {Grid, GridItem} from "@chakra-ui/react";
import TopBar from "./TopBar";
import ElementorIcon from "./ElementorIcon";
import menuItems from "../data/mainMenu";
import Menu from "./Menu";

const AppWrapper = (props) => {
    const appBgColor = useColorModeValue(bgColor.canvas[0], bgColor.canvas[1]);
    const sideBgColor = useColorModeValue(bgColor.panel[0], bgColor.panel[1]);
    const topBarBgColor = useColorModeValue(bgColor.bar[0], bgColor.bar[1]);
    const bodyTextColor = useColorModeValue(textColor.body[0], textColor.body[1]);

    return (
        <Grid minH="100vh" templateRows="50px 1fr" templateColumns="275px 1fr" bg={appBgColor} color={bodyTextColor}>
            <TopBar as={GridItem} colSpan={2} bg={topBarBgColor}
                      icon={<ElementorIcon/>}
                      pageTitle="Elementor App Built with Chakra"/>
            <GridItem boxShadow="lg" zIndex={2} pt={8} bg={sideBgColor}>
                <Menu items={ menuItems } activeItem={props.pageSlug}/>
            </GridItem>
            <GridItem>
                {props.children}
            </GridItem>
        </Grid>
    )
};

export default AppWrapper;