import {
  AutoGrid,
  Box,
  Card,
  CardContent,
  Container,
  Heading,
  Icon,
  PatternCenter,
  Text,
  TextLink,
} from "@openpatch/patches";
import { Home as HomeIcon } from "@openpatch/patches/icons";
import Image from "next/image";

export default function Home() {
  return (
    <PatternCenter>
      <Box p="standard">
        <Container maxWidth="small">
          <Card>
            <CardContent>
              <Heading textAlign="center">
                <Box mr="small" display="inline">
                  <Icon size="large">
                    <HomeIcon />
                  </Icon>
                </Box>
                Welcome to Patches!
              </Heading>
              <Image alt="logo" width="800" height="auto" src="/patches.svg" />
              <Text textAlign="center">
                Get started by editing pages/index.tsx.
              </Text>
            </CardContent>
          </Card>
          <Box mt="standard">
            <AutoGrid columns={[1, 2]} gap="standard">
              <Card>
                <CardContent>
                  <TextLink href="https://openpatch.github.io/patches">
                    Documentation
                  </TextLink>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <TextLink href="https://github.com/openpatch/patches">
                    Source Code
                  </TextLink>
                </CardContent>
              </Card>
            </AutoGrid>
          </Box>
        </Container>
      </Box>
    </PatternCenter>
  );
}
