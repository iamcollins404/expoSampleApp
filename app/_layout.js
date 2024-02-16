import { Slot, SplashScreen } from "expo-router";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { useEffect } from "react";

export default function HomeLayout() {

    return (
        <>
            <GluestackUIProvider config={config}>
                <Slot />
            </GluestackUIProvider>

        </>
    )

}