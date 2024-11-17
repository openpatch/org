import {
  AutoGrid,
  Box,
  Card,
  CardContent,
  CardHeader,
  Center,
  Container,
  Heading,
  Main,
  Text,
  TextLink,
} from "@openpatch/patches";
import { DefaultSeo } from "next-seo";
import { NavLayout } from "../components/NavLayout";

export default function Imprint() {
  return (
    <NavLayout>
      <DefaultSeo title="Imprint" />
      <Main>
        <Box mx="standard">
          <Container>
            <Center my="xxlarge">
              <Heading as="h1">Imprint</Heading>
            </Center>
            <AutoGrid columns={[1, 2, 2]} gap="standard">
              <Card>
                <CardHeader>Contact</CardHeader>
                <CardContent>
                  <Text>
                    E-Mail:{" "}
                    <TextLink href="mailto:contact@openpatch.org">
                      contact@openpatch.org
                    </TextLink>
                  </Text>
                  Phone:{" "}
                  <TextLink href="tel:+4915733755732">
                    +49 1573-3755732
                  </TextLink>
                </CardContent>
              </Card>
            </AutoGrid>
          </Container>
        </Box>
      </Main>
    </NavLayout>
  );
}
