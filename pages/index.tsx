import type { NextPage } from 'next';
import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import BlogPostSummary from '../components/BlogPostSummary';
import { IBlogPost } from '../components/types';
import { posts } from '../data/dummyData';

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
  return { props: { posts } };
};

export default Home;
