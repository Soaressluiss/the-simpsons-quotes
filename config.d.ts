import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        name: string;

        colors: {
            primary: string;
            secondary: string;
            greenMint: string;
            teaRose: string;
            grayPlatinum: string;
        };
        fonts: {
            grayJet: string;
        };
    }
}
