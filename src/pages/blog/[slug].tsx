import {
  Box,
  Card,
  CardContent,
  CardFooter,
  CardMedia,
  Link,
  Main,
  PageHeader,
  TextLink,
} from "@openpatch/patches";
import fs from "fs/promises";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import path from "path";
import { Fragment } from "react";
import { NavLayout } from "../../components/NavLayout";
import { NewsletterForm } from "../../components/NewsletterForm";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  translated: boolean;
  locale: string;
  slug: string;
  raw: string,
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
  NewsletterForm,
};

export default function ExamplePage({
  raw,
  mdxSource,
  frontMatter,
  translated,
  locale,
  slug
}: Props) {
  let url = `https://og.openpatch.org/${encodeURIComponent(
    frontMatter.title
  )}.png?md=1&fontSize=100px&username=${encodeURIComponent(
    frontMatter.author.name
  )}&avatar=${encodeURIComponent(frontMatter.author.image)}`;
  const contributeTranslationLink = `https://github.com/openpatch/org/new/main/src/blog/${locale}?filename=${slug}.mdx&value=${encodeURIComponent(raw)}`

  return (
    <Fragment>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.abstract}
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
              {!translated && (
                <Link href={contributeTranslationLink}>
                  Contribute Translation
                </Link>
              )}
              <Box flex="1" />
              {frontMatter.author.name} | {frontMatter.publishedAt}
            </CardFooter>
          </Card>
        </Main>
      </NavLayout>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  locale,
}) => {
  const defaultPostFilePath = path.join(POSTS_PATH, "en", `${params.slug}.mdx`);
  const postFilePath = path.join(POSTS_PATH, locale, `${params.slug}.mdx`);
  let translated = true;
  const source = await fs.readFile(postFilePath).catch(async () => {
    translated = false;
    return await fs.readFile(defaultPostFilePath);
  });
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);
  return {
    props: { translated, mdxSource, frontMatter: data as Props["frontMatter"], locale, slug: params.slug as string, raw: source.toString() },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .flatMap((slug) => locales.map((locale) => ({ params: { slug }, locale })));

  return {
    paths,
    fallback: false,
  };
};
