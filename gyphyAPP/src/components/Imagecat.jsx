import React from 'react'

const Imagecat = ({ title, url }) => {
  return (
    <div className='image-container'>
      <img src={url} alt={title} className='image-view' />
    </div>
  )
}

export default Imagecat
