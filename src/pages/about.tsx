import {
  AutoGrid,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Center,
  Container,
  Heading,
  Link,
  Main,
  Text,
  TextLink,
} from "@openpatch/patches";
import { NavLayout } from "../components/NavLayout";

export default function About() {
  return (
    <NavLayout>
      <Main>
        <Box mx="standard">
          <Container>
            <Center mt="xxlarge">
              <Heading as="h1">About</Heading>
              <Text textAlign="center" mt="standard" fontSize="large">
                Since the initial release of OpenPatch App in 2018 we worked
                hard continuing improving our assessment platform and the
                assessment of programming competencies in general. We are a
                community of great researchers, educators and developers. The
                purpose of the OpenPatch is to provide rich and interactive
                assessment to everyone. If you want to join the permant team,
                feel free to write us an{" "}
                <TextLink href="mailto:contact@openpatch.org">e-mail</TextLink>.
              </Text>
            </Center>
            <Center my="xxlarge">
              <Heading as="h2">Team</Heading>
              <Box mt="standard">
                <AutoGrid gap="standard" columns={[1, 2]}>
                  <Card>
                    <CardMedia
                      height="150px"
                      image="https://avatars.githubusercontent.com/u/2592379?v=4"
                    ></CardMedia>
                    <CardHeader subtitle="Maintainer">Mike Barkmin</CardHeader>
                  </Card>
                  <Card>
                    <Center height="150px">
                      <Text fontSize="xxlarge" fontWeight="extrabold">
                        +
                      </Text>
                    </Center>
                    <Link href="mailto:contact@openpatch.org">
                      <CardHeader subtitle="Request">Join the Team</CardHeader>
                    </Link>
                  </Card>
                </AutoGrid>
              </Box>
            </Center>
          </Container>
        </Box>
      </Main>
    </NavLayout>
  );
}
