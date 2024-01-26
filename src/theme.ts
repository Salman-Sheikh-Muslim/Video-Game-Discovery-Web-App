// Customizing the defualt theme that comes with chakra

import { extendTheme, ThemeConfig } from "@chakra-ui/react";
//extendTheme is a function
//ThemeConfigg is a Interface

//anotating config with ThemeConfig so that we can access its props
const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({config}); //passing an object with config property

export default theme;