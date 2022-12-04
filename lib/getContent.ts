import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const root = process.cwd();

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
