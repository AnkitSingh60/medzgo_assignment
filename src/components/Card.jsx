import React from 'react'
import VideoCard from './VideoCard';

const Card = ({videos}) => {
  console.log('videos...:', videos)
  return (
    <>
        {videos.map((item,index)=>(
            <>
            {item.id.videoId && <VideoCard item={item} /> }
            </>
        ))}
    </>
  )
}

export default Card