import {
  AutoGrid,
  Box,
  Card,
  CardContent,
  CardHeader,
  Center,
  Container,
  Heading,
  Image,
  Link,
  Pattern,
  Text,
  TextLink,
} from "@openpatch/patches";
import { NavLayout } from "../components/NavLayout";

export default function Home() {
  return (
    <NavLayout>
      <Pattern opacity={0.1} mb="standard">
        <Center height="500px">
          <Heading textColor="card" as="h1">
            OpenPatch
          </Heading>
          <Heading textColor="card" as="h2" textAlign="center">
            Assessment and Training of Programming Competencies
          </Heading>
        </Center>
      </Pattern>
      <Container>
        <Center mx="standard" my="xxlarge">
          <Heading as="h2">Our Work</Heading>
          <Box maxWidth="800px" mb="large">
            <Text textAlign="center" fontSize="large">
              OpenPatch is a group of developer, educators and researchers
              specialized in assessments and training of programming competencies. We create
              dynamic flow-based assessments, interactive task formats, easy to
              understand reports, a platform for sharing and interactive workbooks.
            </Text>
          </Box>
          <AutoGrid columns={[1, 2, 2]} gap="standard">
            <Card>
              <CardHeader subtitle="Development of simple linear assessments to complex assessments with multiple paths for giving precise diagnosis.">
                Flow-based assessments
              </CardHeader>
            </Card>
            <Card>
              <CardHeader subtitle="Development of interactive task for assessing multiple aspects of programming competencies.">
                Interactive Tasks
              </CardHeader>
            </Card>
            <Card>
              <CardHeader subtitle="Research on how user-friendly reports can be shaped and presented to be understood and processed in a blink of an eye.">
                User-Friendly Reports
              </CardHeader>
            </Card>
            <Card>
              <CardHeader subtitle="Development of a platform for sharing flow-based assessments with the world.">
                Platform for Sharing
              </CardHeader>
            </Card>
          </AutoGrid>
        </Center>
        <Center mx="standard" my="xxlarge">
          <Heading as="h2">Our Supporters</Heading>
          <Box maxWidth="800px" mb="large" mt="large">
            <Text textAlign="center" fontSize="large">
              We are open to collaborate with individual teachers, schools,
              universities or companies, who are interessted in assessing their
              people in order to provide efficent training.
            </Text>
          </Box>
          <AutoGrid columns={[1, 2, 2]} gap="standard">
            <Card>
              <CardContent>
                <Link href="https://www.ddi.wiwi.uni-due.de/en/home/">
                  <Image
                    title="Computer Education Research Group, University of Duisburg-Essen"
                    height="100px"
                    src="https://www.ddi.wiwi.uni-due.de/fileadmin/fileupload/I-DDI/ddi_de.png"
                  />
                </Link>
              </CardContent>
            </Card>
          </AutoGrid>
        </Center>
        <Center mx="standard" my="xxlarge">
          <Heading as="h2">Contact Us</Heading>
          <Box maxWidth="800px" mb="large" mt="large">
            <AutoGrid columns={[1, 2]} gap="standard">
              <Text textAlign="center" fontSize="large">
                If you are interessted in a collaboration, feel free to contact
                us. We are looking forward to hearing your ideas!
              </Text>
              <Center>
                <Text textAlign="left" fontSize="large">
                  <TextLink href="mailto:contact@openpatch.org">
                    E-Mail: contact@openpatch.org
                  </TextLink>
                  <br />
                  <TextLink href="https://twitter.com/openpatchorg">
                    Twitter: @openpatchorg
                  </TextLink>
                </Text>
              </Center>
            </AutoGrid>
          </Box>
        </Center>
      </Container>
    </NavLayout>
  );
}
