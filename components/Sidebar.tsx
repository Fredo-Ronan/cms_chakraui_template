"use client";
import {Box, Code, Em, Flex, Highlight, HStack} from "@chakra-ui/react"
import { Button } from "./ui/button"
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "./ui/drawer"
import { GiHamburgerMenu } from "react-icons/gi";
import {useTheme} from "next-themes";
import {navigations} from "../constants/navigations";
import Link from "next/link";

const Sidebar = () => {
    const { theme } = useTheme();

    return (
        <HStack wrap="wrap">
            <DrawerRoot placement={"start"}>
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <GiHamburgerMenu color={theme === "light" ? "black" : "white"} />
                </DrawerTrigger>
                <DrawerContent
                    roundedTop={undefined}
                    roundedBottom={undefined}
                >
                    <DrawerHeader>
                        <DrawerTitle>
                            <Link href={"/"}>
                                CMS Title
                            </Link>
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <Box textStyle="sm" marginBottom="4">
                            <Em>Here you can add your navigation buttons</Em>
                        </Box>

                        <Flex direction="column" gap="2">
                            {navigations.map((data, index) => (
                                <Button key={index} variant={"ghost"} textStyle="md">
                                    <Box textAlign="start" width="full">
                                        <Link href={data.url}>
                                            {data.name}
                                        </Link>
                                    </Box>
                                </Button>
                            ))}
                        </Flex>

                        <Box marginTop="10">
                            <Em>
                                You can customize this navbar content on file
                            </Em>
                            <Code size="lg">
                                <Highlight query={"components/Sidebar.tsx"} styles={{ px: "0.5", bg: "orange.subtle", color: "orange.fg" }}>
                                    components/Sidebar.tsx
                                </Highlight>
                            </Code>
                        </Box>

                        <Box marginTop="4">
                            <Em>
                                If you only want to modify the navigation routes, go and edit to the file
                            </Em>
                            <Code size="lg">
                                <Highlight query={"constants/navigations.ts"} styles={{ px: "0.5", bg: "orange.subtle", color: "orange.fg" }}>
                                    constants/navigations.ts
                                </Highlight>
                            </Code>
                        </Box>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button>Logout</Button>
                    </DrawerFooter>
                    <DrawerCloseTrigger />
                </DrawerContent>
            </DrawerRoot>
        </HStack>
    )
}

export default Sidebar
