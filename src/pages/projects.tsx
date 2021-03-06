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
import { DefaultSeo } from "next-seo";
import { NavLayout } from "../components/NavLayout";

export default function Projects() {
  return (
    <NavLayout>
      <DefaultSeo title="Projects" />
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
                    action={<TextLink href="/newsletter">Subscribe</TextLink>}
                  >
                    Newsletter
                  </CardHeader>
                  <CardContent>
                    Our newsletter will inform you about the latest development
                    by OpenPatch and will send you tips on how you can design
                    and conduct great formative and summative assessments.
                  </CardContent>
                </Card>
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
                <Card>
                  <CardHeader
                    action={
                      <TextLink href="https://github.com/openpatch/hyperbook">
                        GitHub
                      </TextLink>
                    }
                    subtitle="library"
                  >
                    Hyperbook
                  </CardHeader>
                  <CardMedia
                    height="80px"
                    image="/static/hyperbook.png"
                  ></CardMedia>
                  <CardContent>
                  Hyperbook is a quick and easy way to build interactive workbooks, that support
                  modern standards and run superfast.
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
