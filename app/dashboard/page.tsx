import {Box, ClientOnly, Skeleton} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import {ColorModeToggle} from "../../components/color-mode-toggle";

const DashboardPage = () => {
    return (
        <Box textAlign="center" fontSize="xl" pt="8vh">
            <Box pos="absolute" top="4" left="4">
                <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md"/>}>
                    <Sidebar/>
                </ClientOnly>
            </Box>
            <Box pos="absolute" top="4" right="4">
                <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
                    <ColorModeToggle />
                </ClientOnly>
            </Box>

            <Box textStyle="4xl">
                Dashboard Page
            </Box>
        </Box>
    )
}

export default DashboardPage;