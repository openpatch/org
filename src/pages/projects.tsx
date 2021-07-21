import {
  AutoGrid,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Center,
  Container,
  Heading,
  Main,
  Text,
  TextLink,
} from "@openpatch/patches";
import { NavLayout } from "../components/NavLayout";

export default function Projects() {
  return (
    <NavLayout>
      <Main>
        <Box mx="standard">
          <Container>
            <Center mt="xxlarge">
              <Heading as="h1">Projects</Heading>
              <Text textAlign="center" mt="standard" fontSize="large">
                Over the last few years we have work on different projects to
                improve the assessment of programming competencies.
              </Text>
            </Center>
            <Center my="xxlarge">
              <AutoGrid columns={[1, 2]} gap="xlarge">
                {false && (
                  <Card>
                    <CardHeader subtitle="platform">OpenPatch</CardHeader>
                    <CardContent>
                      A platform for exchanging flow-based assessments.
                    </CardContent>
                  </Card>
                )}
                <Card>
                  <CardHeader
                    action={
                      <TextLink href="https://github.com/openpatch/bitflow">
                        GitHub
                      </TextLink>
                    }
                    subtitle="library"
                  >
                    Bitflow
                  </CardHeader>
                  <CardMedia
                    height="80px"
                    image="/static/bitflow.jpg"
                  ></CardMedia>
                  <CardContent>
                    A library for building flow-based assessment systems.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    action={
                      <TextLink href="https://github.com/openpatch/patches">
                        GitHub
                      </TextLink>
                    }
                    subtitle="library"
                  >
                    Patches
                  </CardHeader>
                  <CardMedia
                    height="80px"
                    image="https://raw.githubusercontent.com/openpatch/patches/main/.storybook/public/patches_title.png"
                  ></CardMedia>
                  <CardContent>
                    A design system build for OpenPatch to give us a unique look
                    and feel.
                  </CardContent>
                </Card>
              </AutoGrid>
            </Center>
          </Container>
        </Box>
      </Main>
    </NavLayout>
  );
}
