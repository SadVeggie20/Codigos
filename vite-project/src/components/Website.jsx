import React from 'react'
import ilustracion1 from '../assets/img/ilustracion1.svg'

const Website = ({ title, text, buttonText, link }) => {
  return (
    <section className='wave-contenedor website'>
      <img src={ilustracion1} alt='' />
      <div className='contenedor-textos-main'>
        <h2 className='titulo left'>{title}</h2>
        <p className='parrafo'>{text}
        </p>
        <a href={link} className='cta'>{buttonText}</a>
      </div>
    </section>
  )
}

export default Website
