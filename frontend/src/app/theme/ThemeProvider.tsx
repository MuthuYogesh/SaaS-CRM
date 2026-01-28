"use client";

import { ThemeProvider }from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./emotionCache";
import theme from "./theme";

const emotionCache = createEmotionCache();

export default function ThemeProviderWrapper({children}:Readonly<{children: React.ReactNode;}>){
    return(
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}