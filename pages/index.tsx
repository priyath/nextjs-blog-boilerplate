import type { NextPage } from 'next';
import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import BlogPostSummary from '../components/BlogPostSummary';
import { IBlogPost } from '../components/types';

interface HomeProps {
  posts: IBlogPost[];
}

const Home: NextPage<HomeProps> = (props) => {

  const { posts } = props;

  return (
    <Box>
      <CssBaseline />
      <Grid container sx={{ textAlign: 'center' }}>
        <Grid item xs={12} mb={4}>
          <Box>
            <Typography variant={'h2'}>Welcome to my blog</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ width: '50%', margin: 'auto', textAlign: 'left' }}>
            <Grid item xs={12}>
              <Typography variant={'h4'} py={4}>Latest Posts</Typography>
            </Grid>
            <Grid item xs={12}>
              {
                posts.map((post, index) => {
                  return (
                    <BlogPostSummary post={post} key={index}/>
                  );
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export const getStaticProps = async () => {
  const posts = [
    {
      title: 'My First Blog Post',
      slug: 'first-post',
      publishedDate: '02-06-2022',
    },
    {
      title: 'My Second Blog Post',
      slug: 'second-post',
      publishedDate: '01-05-2022',
    },
  ];
  return { props: { posts } };
};

export default Home;
