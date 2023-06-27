import './App.css'
import { useState, useEffect } from 'react'

function App () {
  const [gifs, setGifs] = useState([]) // aqui se guardan las Gifs
  const APIKEY = import.meta.env.VITE_GIPHY_API_KEY

  // Las llamadas a la API se hacen en useEffect

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=5&offset=0&rating=g&bundle=messaging_non_clips`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results.data)
        return results.data()
      }).catch((error) => {
        console.error(error)
      })
  // Las comillas invertidas `` son para meter pedazos de codigo de javascript a un string. haciendo que el string tenga una parte dinámica
  }, [])

  return (
    <>
      <h1>Giphy App</h1>
    </>
  )
}

export default App
