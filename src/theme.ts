import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/react";

// Define a new color scheme for light mode
const lightModeColors = {
    gray: {
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111'
    }
};

// Config for dark mode
const darkModeConfig: ThemeConfig = {
    initialColorMode: 'dark'
};

// Config for light mode
const lightModeConfig: ThemeConfig = {
    initialColorMode: 'light'
};

const theme = extendTheme({
    config: darkModeConfig, // Default to dark mode
    styles: {
        global: (props: ChakraProps) => ({
            body: {
                bg: props.color === 'light' ? 'gray.50' : 'gray.800',
                color: props.color === 'light' ? 'gray.800' : 'gray.50'
            }
        })
    },
    // Extend color scheme with light mode colors
    colors: {
        ...lightModeColors
    }
});

export default theme;

/*
// Customizing the defualt theme that comes with chakra

import { extendTheme, ThemeConfig } from "@chakra-ui/react";
//extendTheme is a function
//ThemeConfigg is a Interface

//anotating config with ThemeConfig so that we can access its props
const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
colors: {
    gray: {
        50: '#f9f9f9',
100: '#ededed',
200: '#d3d3d3',
300: '#b3b3b3',
400: '#a0a0a0',
500: '#898989',
600: '#6c6c6c',
700: '#202020',
800: '#121212',
900: '#111'
    }
}}); //passing an object with config property

export default theme;
*/