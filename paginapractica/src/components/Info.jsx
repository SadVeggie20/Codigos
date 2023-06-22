import React from 'react'

const Info = ({ texto, parrafo }) => {
  return (
    <section className='info'>
      <div className='contenedor'>
        <h2 className='titulo left'>{texto}</h2>
        <p>{parrafo}</p>
      </div>
    </section>
  )
}

export default Info
