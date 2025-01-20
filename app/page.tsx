import {
    Box,
    ClientOnly, Code, Highlight,
    Skeleton,
} from "@chakra-ui/react"
import { ColorModeToggle } from "../components/color-mode-toggle"
import Sidebar from "../components/Sidebar";

export default async function Page() {

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

        <Box>
            <Box textStyle="4xl">
                Content Management System template
            </Box>
            <Box textStyle="2xl">
                built using Next JS + Chakra UI
            </Box>

            <Box marginTop="4" textStyle="lg">
                Start editing on the file
                <Code size="lg">
                    <Highlight query={"app/page.tsx"} styles={{ px: "0.5", bg: "orange.subtle", color: "orange.fg" }}>
                        app/page.tsx
                    </Highlight>
                </Code>
            </Box>
        </Box>
    </Box>
  )
}
