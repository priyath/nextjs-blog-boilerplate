import * as React from 'react';
import { Box, Container, Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import BlogPostHeader from '../../components/BlogPostHeader';
import { IFrontMatter } from '../../components/types';

interface IBlogProps {
  frontMatter: IFrontMatter;
}
export default function Blog({ frontMatter }: IBlogProps) {
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
}
