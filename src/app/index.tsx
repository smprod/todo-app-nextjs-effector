import {Component} from "react";
import {AppProps} from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export const App = ({ Component, pageProps }: AppProps) => {
    return (
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        
    )
}