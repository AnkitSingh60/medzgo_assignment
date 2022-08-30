import React from 'react'
import VideoCard from './VideoCard';

const Card = ({videos}) => {
  console.log('videos...:', videos)
  return (
    <>
        {videos.map((item,index)=>(
            <div className="card" key={index}>
            {item.id.videoId && <VideoCard item={item} /> }
                
            </div>
        ))}
    </>
  )
}

export default Card