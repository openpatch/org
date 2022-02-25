import {
  AutoGrid,
  ButtonPrimaryLink,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardMedia,
  Main,
  PageHeader,
} from "@openpatch/patches";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { DefaultSeo } from "next-seo";
import path from "path";
import { NavLayout } from "../../components/NavLayout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

type BlogProps = {
  posts: {
    content: string;
    translated: boolean;
    frontMatter: {
      author: {
        name: string;
        image: string;
        twitter: string;
      };
      abstract: string;
      image: string;
      title: string;
      publishedAt: string;
    };
    filePath: string;
  }[];
};

export default function Blog({ posts }: BlogProps) {
  return (
    <NavLayout>
      <DefaultSeo title="Blog" />
      <PageHeader variant="overlap">Blog</PageHeader>
      <Main variant="overlap">
        <AutoGrid gap="standard">
          {posts.map(({ frontMatter, filePath }) => (
            <Card key={filePath}>
              <CardHeader
                href={`/blog/${filePath.replace(/\.mdx?$/, "")}`}
                subtitle={`${frontMatter.author.name} | ${frontMatter.publishedAt}`}
              >
                {frontMatter.title}
              </CardHeader>
              <CardMedia height="150px" image={frontMatter.image} />
              <CardContent>{frontMatter.abstract}</CardContent>
              <CardFooter>
                <ButtonPrimaryLink
                  href={`/blog/${filePath.replace(/\.mdx?$/, "")}`}
                >
                  Read more
                </ButtonPrimaryLink>
              </CardFooter>
            </Card>
          ))}
        </AutoGrid>
      </Main>
    </NavLayout>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({ locale }) => {
  let translated = true;
  const posts = postFilePaths
    .map((filePath) => {
      let source: Buffer;
      try {
        source = fs.readFileSync(path.join(POSTS_PATH, locale, filePath));
      } catch (e) {
        source = fs.readFileSync(path.join(POSTS_PATH, "en", filePath));
        translated = false;
      }
      const { content, data } = matter(source);

      return {
        content,
        frontMatter: data as BlogProps["posts"][0]["frontMatter"],
        filePath,
        translated
      };
    })
    .sort((a, b) =>
      a.frontMatter.publishedAt > b.frontMatter.publishedAt ? -1 : 1
    );

  return { props: { posts } };
};
