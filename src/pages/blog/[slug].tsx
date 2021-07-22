import {
  Card,
  CardContent,
  CardFooter,
  CardMedia,
  Main,
  PageHeader,
  TextLink,
} from "@openpatch/patches";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import path from "path";
import { Fragment } from "react";
import { NavLayout } from "../../components/NavLayout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    abstract: string;
    image: string;
    publishedAt: string;
    author: {
      name: string;
      image: string;
      twitter: string;
    };
  };
}

const components = {
  a: TextLink,
};

export default function ExamplePage({ mdxSource, frontMatter }: Props) {
  let url = `https://og.openpatch.org/${encodeURIComponent(
    frontMatter.title
  )}.png?md=1&fontSize=100px&username=${encodeURIComponent(
    frontMatter.author.name
  )}&avatar=${encodeURIComponent(frontMatter.author.image)}`;
  return (
    <Fragment>
      <NextSeo
        title={frontMatter.title}
        twitter={{
          handle: `@${frontMatter.author.twitter}`,
        }}
        openGraph={{
          title: frontMatter.title,
          type: "article",
          article: {
            publishedTime: new Date(frontMatter.publishedAt).toISOString(),
          },
          images: [
            {
              url,
            },
          ],
        }}
      />
      <NavLayout>
        <PageHeader variant="overlap">{frontMatter.title}</PageHeader>
        <Main variant="overlap">
          <Card>
            <CardMedia height="200px" image={frontMatter.image} />
            <CardContent>
              <MDXRemote {...mdxSource} components={components} />
            </CardContent>
            <CardFooter>
              {frontMatter.author.name} | {frontMatter.publishedAt}
            </CardFooter>
          </Card>
        </Main>
      </NavLayout>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);
  return { props: { mdxSource, frontMatter: data as Props["frontMatter"] } };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
