import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export const getFiles = async (type: string) => {
  return fs.readdirSync(path.join(root, 'data', type));
};

export const getFileBySlug = async (type: string, slug: string) => {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  // parse the file content using gray-matter
  const { data, content } = matter(source);

  const mdxSource = await serialize(content);

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: slug || null,
      ...data,
    },
  };
};

/**
 Parse specified <type> subdirectory inside the data folder and return list of parsed blog post content
 **/
export const getAllFilesFrontMatter = async (type: string) => {
  // read the file names from the /data/blog folder where our blog files will reside
  const files = fs.readdirSync(path.join(root, 'data', type));

  // read each file and parse its content through gray-matter
  const blogContent = files.reduce((allPosts: any[], postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);

  // sort the content (desc) by published date and return the list of blog posts
  return blogContent.sort((contentA, contentB) => {
    const dateA = new Date(contentA.publishedAt).getTime();
    const dateB = new Date(contentB.publishedAt).getTime();
    return dateA < dateB ? 1 : -1;
  });
};
