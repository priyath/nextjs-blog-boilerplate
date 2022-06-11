import { IBlogPost } from '../types';
import NextLink from 'next/link';
import { Box, Link, Typography } from '@mui/material';

interface BlogPostSummaryProps {
  post: IBlogPost,
  key: number,
}

const BlogPostSummary = (props: BlogPostSummaryProps) => {

  const { post, key } = props;

  return (
    <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <NextLink href={`/blog/${post.slug}`} passHref>
        <Link sx={{ textDecoration: 'none' }}>
          <Typography variant={'body1'}>{post.title}</Typography>
        </Link>
      </NextLink>
      <Typography variant={'caption'}>{post.publishedDate}</Typography>
    </Box>
  )
}

export default BlogPostSummary;
