import './App.css'
import ilustracion from './assets/img/ilustracion.svg'
import uno from './assets/img/uno.jpg'
import seis from './assets/img/seis.jpg'
import dos from './assets/img/dos.jpg'
import tres from './assets/img/tres.jpg'
import cuatro from './assets/img/cuatro.jpg'
import cinco from './assets/img/cinco.jpg'
import Hero from './components/Hero'
import Website from './components/Website'
import Info from './components/Info'
import Cards from './components/Cards'

function App () {
  return (
    <>
      <Hero
        title='Hola Cara de Bola'
        subtitle='Estoy aprendiendo a programar'
        buttonText='Apachurrale'
        buttonLink='https://www.twitch.tv/vargskelethor'
      />

      <Website
        title='No Tengo idea'
        text='Me gusta la mazacuata, Feliz día del Mes.'
        buttonText='Apachurrale'
        Link='https://www.youtube.com/watch?v=jPdVyhbkJf8&t=8354s&ab_channel=Vinesauce%3ATheFullSauce'
      />

      <Info
        texto='Sample Text'
        parrafo='Si puedes ver esto significa que funciona =P'
      />

      <Cards
        maintitulo='Titulo de Tarjetitas'
        titulo1='Copiar'
        des1='Este es el simbolo de copiar o duplicar'
        link1=''
        ctext1='Picale'
        titulo2='Base de Datos'
        des2='Este es el simbolo de guardar'
        link2=''
        ctext2='Dale Click'
        titulo3='Recortar'
        des3='Este es el simbolo de Recortar'
        link3=''
        ctext3='Apachurrale'
      />

      <section className='galeria'>
        <div className='contenedor'>
          <h2 className='titulo'>Our work</h2>
          <article className='galeria-cont'>
            <img src={uno} alt='' />
            <img src={dos} alt='' />
            <img src={tres} alt='' />
            <img src={cuatro} alt='' />
            <img src={cinco} alt='' />
            <img src={seis} alt='' />
          </article>
        </div>
      </section>

      <section className='info-last'>

        <div className='contenedor last-section'>
          <div className='contenedor-textos-main'>
            <h2 className='titulo left'>Title of section</h2>
            <p className='parrafo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit nostrum expedita quasi odio architecto laudantium sunt nemo dicta atque?</p>
            <a href='' className='cta'>Learn more</a>
          </div>
          <img src={ilustracion} alt='' />
        </div>

        <div className='svg-wave' style={{ height: '150px', overflow: 'hidden' }}>
          <svg
            viewBox='0 0 500 150' preserveAspectRatio='none'
            style={{ height: '100%', width: '100%' }}
          >
            <path
              d='M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z'
              style={{ stroke: 'none', fill: '#f5576c' }}
            />
          </svg>
        </div>
      </section>

      <footer id='contacto'>
        <div className='contenedor'>
          <h2 className='titulo'>Contact us</h2>
          <form action='' className='form'>
            <input className='input' type='text' name='' id='' placeholder='Nombre' />
            <input className='input' type='email' name='' id='' placeholder='Email' />
            <textarea className='input' name='' id='' cols='30' rows='10' placeholder='Mensaje' />
            <input className='input' type='submit' value='Enviar' />
          </form>
        </div>
      </footer>

      <script src='https://kit.fontawesome.com/c15b744a04.js' crossOrigin='anonymous' />
    </>
  )
}

export default App
