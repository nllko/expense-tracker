import Material from "@primeuix/themes/material";
import {definePreset} from "@primeuix/themes";

const preset = definePreset(Material, {
    semantic: {
        primary: {
            50: '#c3e0cd',
            100: '#ace0bf',
            200: '#84d8a3',
            300: '#53d683',
            400: '#22c55e',
            500: '#03aa40',
            600: '#028432',
            700: '#026827',
            800: '#045120',
            900: '#053f1a',
            950: '#02210d'
        },
        colorScheme: {
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '#d8d8d8',
                    100: '#cecccc',
                    200: '#bfbfbf',
                    300: '#b7b3b3',
                    400: '#969494',
                    500: '#7a7a7a',
                    600: '#565555',
                    700: '#3a3a3a',
                    800: '#262626',
                    900: '#141414',
                    950: '#151515'
                }
            }
        }
    },
    components: {
        dialog: {
            root: {
                shadow: 'none'
            },
        }
    },
})

const config = {
    theme: {
        preset: preset,
        options: {
            cssLayer: false
        }
    }
}

export default config