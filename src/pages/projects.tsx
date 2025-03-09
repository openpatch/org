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
                <Card>
                  <CardHeader
                    action={
                      <TextLink href="https://github.com/openpatch/scratch-for-java">
                        GitHub
                      </TextLink>
                    }
                    subtitle="library"
                  >
                    Scratch for Java
                  </CardHeader>
                  <CardMedia
                    height="80px"
                    image="/static/scratch4j.png"
                  ></CardMedia>
                  <CardContent>
                    To ease the transition from the block-based programming environment Scratch to Java this library was created. Therefore, the core elements of Scratch are remodeled.
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
                <Card>
                  <CardHeader
                    action={
                      <TextLink href="https://github.com/openpatch/java-memory-playground">
                        GitHub
                      </TextLink>
                    }
                    subtitle="library"
                  >
                    Java Memory Playground
                  </CardHeader>
                  <CardMedia
                    height="80px"
                    image="/static/jmp.png"
                  ></CardMedia>
                  <CardContent>
                    Playground to getting to know the internals of the stack and heap of a Java application.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    action={
                      <TextLink href="https://github.com/openpatch/java-memory-playground">
                        GitHub
                      </TextLink>
                    }
                    subtitle="library"
                  >
                    Manual Neural Network
                  </CardHeader>
                  <CardMedia
                    height="80px"
                    image="/static/mnn.png"
                  ></CardMedia>
                  <CardContent>
                    Playground to getting to know the internals of a neural network.
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
              </AutoGrid>
            </Center>
          </Container>
        </Box>
      </Main>
    </NavLayout>
  );
}
