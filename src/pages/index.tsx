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
            Open Projects for Assessment and Training of Computing Competencies
          </Heading>
        </Center>
      </Pattern>
      <Container>
        <Center mx="standard" my="xxlarge">
          <Heading as="h2">This is Us</Heading>
          <Box maxWidth="800px" mb="large">
            <Text textAlign="center" fontSize="large">
              OpenPatch is an acronym for Open Projects for Assessment and
              Training of Competencies, especially in the field of Computer
              Science. The four letters in Open are not only the first you read,
              but are also the core foundation which we are based on. We believe
              that education should be available to everybody. Therefore, we
              focus our work on Open Source making everything we do available to
              the public.
            </Text>
          </Box>
          <Heading mb="small" as="h2">Our Principles</Heading>
          <AutoGrid columns={[1, 2, 2]} gap="standard">
            <Card>
              <CardHeader as="h3" subtitle="Everything we do is for the student and must improve their learning. We are not there to judge students, we are not here to look at the students from above, we are here to propel them and inspire them to be a computer scientist.">
                Put the student first
              </CardHeader>
            </Card>
            <Card>
              <CardHeader as="h3" subtitle="Do not be afraid of putting materials out in the open. Materials are never perfect, we as teachers always find stuff to improve, but keep your materials for yourself is not a solution. We believe that only as a community we can develop the best experience for our students. So put your materials out there and share them with the Computer Science Education community.">
                Develop in the open
              </CardHeader>
            </Card>
            <Card>
              <CardHeader as="h3" subtitle="Why should a student not have access to every assessment or training material? Hiding material from students, because it could decrease the reliability of an assessment or because they would get to far ahead of everyone else, is something we do not believe in. Students should not be hindered by arbitrary borders. If sparked their interest, we should endorse it and help them to move forward.">
                Be a guide not an inspector
              </CardHeader>
            </Card>
            <Card>
              <CardHeader as="h3" subtitle="Even though we are developing digital tools which might seem to replace teachers like automated assessments. We believe that only a professional trained teacher can create the right environment to foster the learning of students. Therefore, we see digital tools as something to help a teacher to do their job, but never to replace them. We also believe that the communication and the connection between a teacher and a student is one of the most important bits of education.">
                Digital tools can never replace a teacher
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
