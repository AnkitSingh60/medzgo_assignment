import React from 'react'

const VideoCard = ({item}) => {
    const {snippet} = item;
    // console.log('snippet:', snippet)
  return (
  
    <div className='cardDiv'>
        <img src={snippet.thumbnails.high.url} alt="img" className="img" />
        <p className='title'>{snippet.title.toLowerCase()}</p>
    </div>
  )
}

export default VideoCard