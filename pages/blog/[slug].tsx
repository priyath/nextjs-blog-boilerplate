import * as React from 'react';
import { Box, Container, Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import BlogPostHeader from '../../components/BlogPostHeader';
import { IFrontMatter } from '../../components/types';
import { posts } from '../../data/dummyData';

interface IBlogProps {
  frontMatter: IFrontMatter;
}

const Blog = ({ frontMatter }: IBlogProps) => {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          px: {
            md: 8,
            sm: 4,
            xs: 3,
          },
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            margin: 'auto',
            marginTop: { md: 0, xs: '56px' },
            maxWidth: '820px',
          }}
        >
          <BlogPostHeader frontMatter={frontMatter} />
          <Divider
            sx={{
              marginBottom: {
                lg: 8,
                xs: 6,
              },
              color: 'primary.main',
              width: '100%',
              marginX: 'auto',
            }}
          />
          {/* TBA: blog content goes here */}
        </Box>
      </Container>
    </>
  );
};

export async function getStaticPaths() {

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const frontMatter = posts.find(post => post.slug === params.slug);
  return {
    props: {
      frontMatter,
    }
  };
}


export default Blog;
