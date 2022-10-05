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
import { DefaultSeo } from "next-seo";
import { NavLayout } from "../components/NavLayout";

export default function Team() {
  return (
    <NavLayout>
      <DefaultSeo title="Team" />
      <Main>
        <Box mx="standard">
          <Container>
            <Center my="xxlarge">
              <Heading as="h1">Team</Heading>
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
