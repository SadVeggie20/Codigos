import './App.css'
import { useState, useEffect } from 'react'
import Imagecat from './components/Imagecat'
import { Searchbar } from './components/Searchbar'

function App () {
  const [gifs, setGifs] = useState([]) // aqui se guardan las Gifs
  const APIKEY = import.meta.env.VITE_GIPHY_API_KEY

  // Las llamadas a la API se hacen en useEffect

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=20&offset=0&rating=g&bundle=messaging_non_clips`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  // Las comillas invertidas `` son para meter pedazos de codigo de javascript a un string. haciendo que el string tenga una parte dinámica
  }, [])

  const sendSearch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${search}&limit=20&offset=0&rating=g&lang=es&bundle=messaging_non_clips`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <div className='App'>
        <Searchbar handleSearch={sendSearch} />
        <div className='grid-cards'>
          {
            gifs.map((gif) => (
              <Imagecat
                key={gif.id}
                title={gif.title}
                url={gif.images.fixed_height.url}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
