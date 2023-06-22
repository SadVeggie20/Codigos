import React from 'react'

function Cards ({ maintitulo, titulo1, titulo2, titulo3, des1, des2, des3, link1, link2, link3, ctext1, ctext2, ctext3 }) {
  return (
    <section className='cards contenedor'>
      <h2 className='titulo'>{maintitulo}</h2>
      <div className='content-cards'>
        <article className='card'>
          <i className='far fa-clone' />
          <h3>{titulo1}</h3>
          <p>{des1}</p>
          <a href={link1} className='cta'>{ctext1}</a>
        </article>
        <article className='card'>
          <i className='fas fa-database' />
          <h3>{titulo2}</h3>
          <p>{des2}</p>
          <a href={link2} className='cta'>{ctext2}</a>
        </article>
        <article className='card'>
          <i className='far fa-object-group' />
          <h3>{titulo3}</h3>
          <p>{des3}</p>
          <a href={link3} className='cta'>{ctext3}</a>
        </article>
      </div>
    </section>
  )
}

export default Cards
