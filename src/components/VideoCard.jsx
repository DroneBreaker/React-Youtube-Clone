import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideolUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {md: '230px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideolUrl}>
            <CardMedia sx={{width: 350, height: 180}} alt={snippet?.title} image={snippet?.thumbnails?.high?.url} />

            <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
              <Link to={videoId ? `/video/${videoId}` : demoVideolUrl}>
                <Typography variant='subtitle1' fontWeight={'bold'} color='#FFF'>
                  {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
              </Link>

              <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight={'bold'} color='gray'>
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>
                </Typography>
              </Link>
            </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard