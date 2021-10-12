import {
  Box,
  Center,
  Container,
  Heading,
  Main,
  Text,
} from "@openpatch/patches";
import { DefaultSeo } from "next-seo";
import { NavLayout } from "../../components/NavLayout";
import { NewsletterForm } from "../../components/NewsletterForm";

export default function Newsletter() {
  return (
    <NavLayout>
      <DefaultSeo title="Newsletter" />
      <Main>
        <Box mx="standard">
          <Container>
            <Center mt="xxlarge">
              <Heading as="h1">Newsletter</Heading>
              <Text textAlign="center" mt="standard" fontSize="large">
                Our newsletter will inform you about the latest development by
                OpenPatch and will send you tips on how you can design and
                conduct great formative and summative assessments.
              </Text>
              <NewsletterForm title="" />
            </Center>
          </Container>
        </Box>
      </Main>
    </NavLayout>
  );
}
