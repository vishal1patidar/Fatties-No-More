import React from 'react';
import { Typography, Box } from '@mui/material';
import Loader from './Loader';
import Youtube from '../assets/assets/images/youtube-red.png';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="mainGymDetail">
      <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
        <div className="yt_logo_videos_avez">
          <img src={Youtube} alt="" />
        </div>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#fff" mb="33px">
          Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
        </Typography>
        <div className="videos">
          <div className="subvideos">
            <div className="stack">
              {exerciseVideos?.slice(0, 9)?.map((item, index) => (
                <a
                  key={index}
                  className="exercise-video"
                  href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ExerciseVideos;
